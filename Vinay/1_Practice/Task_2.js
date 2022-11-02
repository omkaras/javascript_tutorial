class FinancialData {

    // This is parameterized constructor (means it takes value in parameter)
    // this.dataOf is setting some data in this context. this means data which object holds
    // Means when you fill a form incomplete or complete, whatever your data is, is accessed by this keyword
    constructor(name) {
        this.dataOf = name;
      }

    // here dataOf variable is read from this context because we are loading it in line 29 and 35 via contructor
    getSalaryInformation(){
        if(this.dataOf.toLowerCase() === "vinay"){
            return `${this.dataOf} salary is not credited`
        }
        return `${this.dataOf} salary is $3000`
    }

    getPFInformation = () => {
        if(this.dataOf.toLowerCase() === "vinay"){
            return `${this.dataOf} PF data is not updated`
        }
        return `${this.dataOf} has 5000rs in his PF account`
    }

}

getFinancialData = () => {
    var dataOf = document.getElementById("dataOf").value
    let obj = new FinancialData(dataOf);
    document.getElementById("salary-data").innerHTML = obj.getSalaryInformation()
}

getPFData = () => {
    var dataOf = document.getElementById("dataOf").value
    let obj = new FinancialData(dataOf);
    document.getElementById("pf-data").innerHTML = obj.getPFInformation()
}

getCCData = () => {
    var dataOf = document.getElementById("dataOf").value

    document.getElementById("cc-data").innerHTML = "Functionality to be done by Vinay"
}