const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Punto 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Nombres de los explorers:")
explorers.forEach(explorer =>  console.log(explorer.name))

// Punto 2. Imprime el stack de cada explorer, usa FOR EACH
console.log("Stacks de los explorers:")
explorers.forEach(explorer =>  console.log(explorer.stack))

// Punto 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorersStacks = explorers.map(function(explorer){ return explorer.stack})
console.log("Stacks de los explorers:")
console.log(explorersStacks)

// Punto 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorersWhoKnowJs = explorers.filter((explorer) =>
  explorer.stack.includes('js')
)
console.log("Explorers que saben js:")
explorersWhoKnowJs.forEach(explorer => console.log(explorer.name))

// Punto 5. Busca el primer explorer que sea de la CDMX, usa FIND
const fromCdmx = explorers.find((explorer) => explorer.city === "CDMX")
console.log("Primer explorer de la Cdmx:")
console.log(fromCdmx.name)

// Punto 6. Obtén la suma de todos los exercises_completed, usa REDUCE
const sumExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log("Total de ejercicios completados por los explorers:")
console.log(sumExercises)

// Punto 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const haveSomeFinished = explorers.some((explorer) =>  explorer.missions.frontend.isFinished === true)
console.log("Al menos un explorer completó los ejercicios de frontend?:")
console.log(haveSomeFinished)

// Punto 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY
const haveAllFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log("Todos los explorers terminaron el onborading?:")
console.log(haveAllFinished)