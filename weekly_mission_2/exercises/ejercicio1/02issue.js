const issue = {
    title: "Package number two not working",
    repositoryNameAssociated: "MyPackages",
    status: "open",
    numberOfComments: 100,
    labels: ["urgent", "javascript", "version 1"],
    author: "Pagutri",
    dateCreated: "04-18-2022",
    lastUpdated: "04-19-2022",
    getTitleAndAuthor: function(){
      return [this.title, this.author]
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} is currently ${this.status}`
    }
   }
   
   console.log("Título del issue:" + issue.getTitleAndAuthor()[0])
   console.log("Autor del issue: " + issue.getTitleAndAuthor()[1])
   console.log(issue.getGeneralInfo())
   