package laidongs.lab04.utils;

import laidongs.lab04.model.SalaryInput;
import laidongs.lab04.model.report.DeductionRow;
import laidongs.lab04.model.report.IncrementRow;
import laidongs.lab04.model.report.PredictionRow;
import laidongs.lab04.report.DeductionReport;
import laidongs.lab04.report.IncrementReport;
import laidongs.lab04.report.PredictionReport;

import java.util.List;

public class SalaryGenerator {
    private SalaryInput input;

    public SalaryGenerator(SalaryInput input) {
        this.input = input;
    }

    public void buildReport() {
        IncrementReport report = new IncrementReport();
        List<IncrementRow> incrementData = report.calculateData(input);
        report.print(incrementData);

        DeductionReport deductionReport = new DeductionReport();
        List<DeductionRow> deductionData = deductionReport.calculateData(input);
        deductionReport.print(deductionData);


        PredictionReport predictionReport = new PredictionReport();
        List<PredictionRow> predictionData = predictionReport.calculateData(incrementData, deductionData);
        predictionReport.print(predictionData);
    }


}
