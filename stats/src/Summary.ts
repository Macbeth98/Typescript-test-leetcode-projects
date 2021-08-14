import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  static printHello(){
    console.log('Hello World..');
  }

  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(
      new WinsAnalysis(team), new HtmlReport()
    )
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output =  this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

Summary.printHello(); // can call static method without needing to create an instance of the class