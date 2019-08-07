package laidongs.lab04;


import laidongs.lab04.utils.SalaryGenerator;
import laidongs.lab04.utils.SalaryInputBuilder;
import laidongs.lab04.model.SalaryInput;
/**
 * SalaryLab04.
 */
public class SalaryLab04 {

    public SalaryLab04() {
        System.out.println();
        System.out.println("Salary Income Predictor");
        System.out.println("=================================================");
        System.out.println();
    }

    public SalaryInput getInputFromTerminal() {
        return new SalaryInputBuilder()
                .collectStartingSalary()
                .collectIncrementInPercent()
                .collectIncrementFrequency()
                .collectDeductionsOnIncome()
                .collectDeductionsFrequency()
                .collectPredictionYears()
                .build();
    }

    public void predict(SalaryInput input) {
        new SalaryGenerator(input).buildReport();
    }

    public static void main(String[] args) {
    	SalaryLab04 test = new SalaryLab04();
        SalaryInput input = test.getInputFromTerminal();

        test.predict(input);
    }



}
