package hello;

import java.math.BigDecimal;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class PersonForm {

    //@NotNull
   // @Size(min=2, max=30)
    private String name;
    
    @NotNull
    @Min(value = 1900,message="please input valid year greater than 1900")
    @Max(value = 9999,message="please input valid year less than 1900")
    private int year;
    @NotNull
    @Min(value = 1,message="please input valid start salary which not less than 1")
    private BigDecimal salaryOfStart;//
    
    @NotNull
    private BigDecimal percentOfIncrement;//
    
    @NotNull
    private BigDecimal frequentOfIncrement;//
    
    @NotNull
    private BigDecimal debuctionOfIncome;//
    @NotNull
    @Min(18)
    private BigDecimal age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public BigDecimal getSalaryOfStart() {
		return salaryOfStart;
	}
	public void setSalaryOfStart(BigDecimal salaryOfStart) {
		this.salaryOfStart = salaryOfStart;
	}
	public BigDecimal getPercentOfIncrement() {
		return percentOfIncrement;
	}
	public void setPercentOfIncrement(BigDecimal percentOfIncrement) {
		this.percentOfIncrement = percentOfIncrement;
	}
	public BigDecimal getFrequentOfIncrement() {
		return frequentOfIncrement;
	}
	public void setFrequentOfIncrement(BigDecimal frequentOfIncrement) {
		this.frequentOfIncrement = frequentOfIncrement;
	}
	public BigDecimal getDebuctionOfIncome() {
		return debuctionOfIncome;
	}
	public void setDebuctionOfIncome(BigDecimal debuctionOfIncome) {
		this.debuctionOfIncome = debuctionOfIncome;
	}
	public BigDecimal getAge() {
		return age;
	}
	public void setAge(BigDecimal age) {
		this.age = age;
	}

 



}
