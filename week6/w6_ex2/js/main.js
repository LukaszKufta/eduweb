(function() {
    class LocalDB {
        constructor(dbName) {
          this.dbName = dbName;
        }
        get(name) {
          let data = JSON.parse(window.localStorage.getItem(`${this.dbName}.${name}`));
          console.log(data);
        }
        save(name, data) {
          window.localStorage.setItem(`${this.dbName}.${name}`, JSON.stringify(data));
        }
    }
    if ("localStorage" in window) {
        var DB1 = new LocalDB("DB1");
        var pacynka = {
            firstName: "Kulfon",
            lastName: "Kulfoniasty",
            age: 52
        };
        DB1.save("Kulfon", pacynka);
        DB1.get("Kulfon");
    } else {
        alert("brak obslugi pamieci w przegladarce");
    }
})();
