const onClick = () => {
    let height = +prompt("Укажите ваш рост") / 100
    let weight = +prompt("Укажите ваш вес")
    let ibw = weight / (height ** 2)

    alert(`Ваш индекс массы тела равен: ${ibw.toFixed(1)}`)

    if (ibw < 16) {
        alert(`Выраженный дефицит массы тела`)  
    } else if (ibw > 16 && ibw < 18.5) {
        alert(`Недостаточная масса тела (дефицит)`)
    } else if (ibw > 18.5 && ibw < 25) {
        alert(`Норма`)
    } else if (ibw > 25 && ibw < 30) {
        alert(`Избыточная масса тела`)
    } else if (ibw > 30 && ibw < 35) {
        alert(`Ожирение первой степени`)
    } else if (ibw > 35 && ibw < 40) {
        alert(`Ожирение второй степени`)
    } else if (ibw > 40) {
        alert(`Ожирение третьей степени`)
    }
}