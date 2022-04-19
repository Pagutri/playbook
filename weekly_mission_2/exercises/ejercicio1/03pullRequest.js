const issue = {
    title: "Package number two now working",
    author: "Pagutri",
    branchName: "PackageTwoTesting",
    dateCreated: "04-17-2022",
    status: "open",
    repositoryNameAssociated: "MyPackages",
    getTitleAndAuthor: function(){
      return [this.title, this.author]
    },
    getStatus: function(){
      return `This PR ${this.title} is currently ${this.status}`
    }
   }
   
   console.log("Título del issue:" + issue.getTitleAndAuthor()[0])
   console.log("Autor del issue: " + issue.getTitleAndAuthor()[1])
   console.log(issue.getStatus())
   