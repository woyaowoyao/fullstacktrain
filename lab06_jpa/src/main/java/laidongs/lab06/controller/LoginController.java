package laidongs.lab06.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import laidongs.lab06.entity.User;
import laidongs.lab06.exception.BusinessException;
import laidongs.lab06.service.UserService;
import laidongs.lab06.util.Result;

@Controller
public class LoginController extends BaseController {
    final static Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserService userService;

    @GetMapping(value = "/login")
    public String loginPage(@RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "logout", required = false) String logout, HttpSession session, Model model) {

        AuthenticationException ex = (AuthenticationException) session
                .getAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);

        String errorMessage = (error != null && ex != null) ? ex.getMessage() : null;

        if (logout != null) {
            errorMessage = "You have been successfully logged out !!";
        }

        model.addAttribute("errorMessage", errorMessage);

        logger.debug("error message is {}", errorMessage);

        return "login";
    }

    @GetMapping(value = "/logout")
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login?logout=true";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @PostMapping("/register")
    @ResponseBody
    public Result doRegister(@RequestParam(name = "kaptcha", required = true) String kaptcha,
            @Valid @RequestBody User user, HttpSession session) {

        checkCaptcha(kaptcha, session);

        User existingUser = userService.findByUsername(user.getUsername());
        if (existingUser != null) {
            throw new BusinessException(String.format("Username %s already exists.", user.getUsername()));
        }

        userService.saveUser(user);
        return Result.ok(user);
    }

}