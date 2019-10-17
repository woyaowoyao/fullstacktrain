package hello;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Controller
public class WebController implements WebMvcConfigurer {

	private static final Logger log = LoggerFactory.getLogger(Application.class);
	@Autowired
	private  CustomerRepository customerRepository;
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/results").setViewName("results");
    }

    @GetMapping("/registration")
    public String showForm(PersonForm personForm) {
        return "form";
    }

    @PostMapping("/registration")
    public String checkPersonInfo(@Valid PersonForm personForm, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
        	log.error("valid failed..."+bindingResult.getAllErrors());
            return "form";
        }
        Customer entity = new Customer(personForm.getName(),personForm.getAge());
        customerRepository.save(entity);
        return "redirect:/results";
    }
}
