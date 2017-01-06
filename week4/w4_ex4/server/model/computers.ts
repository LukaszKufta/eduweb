import * as computerModel from './computer'

export class computers {
    private computersList: Array<computerModel.computer>;
    constructor(computers: Array<computerModel.computer> = []) {
        this.computersList = new Array<computerModel.computer>();
        computers.forEach(
            (computer) => this.computersList.push(computer)
        );
    }
    public list(): Array<computerModel.computer> {
        return this.computersList;
    }
    public add(computerTitle: string, computerAuthor: string, computerPublicationDate: number): Array<computerModel.computer> {

        let computerIds: Array<number> = this.computersList.map(
            (computer) => computer.getId()
        );
        let computerId: number = Math.max(...computerIds) + 1;

        let computer = new computerModel.computer(computerId, computerTitle, computerAuthor, computerPublicationDate);

        this.computersList.push(computer);
        return this.computersList;
    }
    public delete(computerId: number): Boolean
    {
      let deleted: Boolean = false;
      this.computersList = this.computersList.filter(
        (computer: computerModel.computer) => {
          deleted = deleted || computer.getId() === computerId;
          return computer.getId() !== computerId
        }
      )
      return deleted;
    }
    public fetch(computerId: number): computerModel.computer {
        return computerId && this.computersList.filter(
            (computer: computerModel.computer) => computer.getId() === computerId
        ).shift();
    }
    public find(computerQuery: string): computerModel.computer {
      let computerId: number = parseInt(computerQuery);
      computerQuery = computerQuery.toLowerCase();
      return this.computersList.filter(
          (computer: computerModel.computer) => computer.getId() === computerId
          || computer.getTitle().toLowerCase() === computerQuery
          || computer.getAuthor().toLowerCase() === computerQuery
      ).shift();
    }
}
