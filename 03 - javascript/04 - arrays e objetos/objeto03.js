const task1 = {
    name: "Task 1",
    createdAd: new Date(),
    updateAd: null,
    completed: false
}
const task2 = {
    name: "Task 2",
    createdAd: new Date(),
    updateAd: null,
    completed: false,
    changeName
}

function changeName(name){
        this.nome = name
        this.updateAd = new Date()
}

task1.name = "task1 update"
task1.updateAd = new Date()
task2.changeName("task2 update")
console.log(task1)
console.log(task2)