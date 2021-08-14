import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// const reader = new MatchReader('football.csv');
// reader.read();

// const csvFieReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFieReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);




