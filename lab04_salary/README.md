
## Run

git clone  https://github.com/woyaowoyao/fullstacktrain.git
cd fullstacktrain/lab04_salary
mvn clean package
java -cp ./target/*.jar laidongs.lab04.SalaryLab04


## result

```sh
$ java -cp ./target/*.jar laidongs.lab04.SalaryLab04

Salary Income Predictor
=================================================

Input starting salary: 2019
Input increment in percent: 10
Input increment received frequency: 4
Input deductions on income: 2
Input deductions received frequency: 1
Input prediction years: 5

--------------------------------------------------------------
a. Increment Report

Year  |  Starting Salary |  # of Increments |  Increment % | Increment Amount
1     |           2019.0 |                4 |         10.0 |           937.02
2     |          2956.02 |                4 |         10.0 |          1371.89
3     |          4327.91 |                4 |         10.0 |          2008.58
4     |          6336.49 |                4 |         10.0 |          2940.76
5     |          9277.25 |                4 |         10.0 |          4305.57

--------------------------------------------------------------
b. Deduction Report

Year  |  Starting Salary |  # of Deductions |  Deduction % | Deduction Amount
1     |           2019.0 |                1 |          0.1 |              2.0
2     |           2017.0 |                1 |          0.1 |              2.0
3     |           2015.0 |                1 |          0.1 |              2.0
4     |           2013.0 |                1 |          0.1 |              2.0
5     |           2011.0 |                1 |          0.1 |              2.0

--------------------------------------------------------------
c. Prediction

Year  |  Starting Salary | Increment Amount | Deduction Amount |    Salary Growth
1     |           2019.0 |           937.02 |              2.0 |           935.02
2     |          2954.02 |          1371.89 |              2.0 |          1369.89
3     |          4323.91 |          2008.58 |              2.0 |          2006.58
4     |          6330.49 |          2940.76 |              2.0 |          2938.76
5     |          9269.25 |          4305.57 |              2.0 |          4303.57
