const User = require("../../app/models/User")

describe("Test para User" , () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("viejogro")
    })

    test("Requerimiento 2: Fechas en atributos de User" , () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test("Requerimiento 3: Agregando getters" , () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio")
        expect(user.getUsername).toBe("viejogro")
    })

    test("Requerimiento 4: Agregando setters" , () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio")
        user.setUsername = "IngGalindo"
        expect(user.username).toBe("IngGalindo")
    })

})