const state = document.getElementById("state")
const area = document.getElementById("area")
const disability = document.getElementById("disability")
const ageGroup = document.getElementById("agegroup")
const predict = document.getElementById("predict")

predict.addEventListener("click", async () => {
    if (state.value === "") {
        Swal.fire({
            icon: "warning",
            title: "Ahhh!",
            text: "Select any state",
        })
        return
    }
    if (area.value === "") {
        Swal.fire({
            icon: "warning",
            title: "Ahhh!",
            text: "Select any area",
        })
        return
    }
    if (disability.value === "") {
        Swal.fire({
            icon: "warning",
            title: "Ahhh!",
            text: "Select any disability",
        })
        return
    }
    if (ageGroup.value === "") {
        Swal.fire({
            icon: "warning",
            title: "Ahhh!",
            text: "Select any age-group",
        })
        return
    }
    const ioObj = {
        state: state.value,
        area: area.value,
        disability: disability.value,
        ageGroup: ageGroup.value,
        predict: predict.value,
    }
    sendApiRequest(ioObj)
})

async function sendApiRequest(ioObj) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ioObj),
    }
    const response = await fetch(url, options)
    const res = response.json()
    console.log(res)
}
