"use server"


const googleScriptURL = "https://script.google.com/macros/s/AKfycbxdzZwgvUdSQjWm1eHwWnqbcq_qhsSpMREwiw5-3TugqnrZl0h-qMeou18Txl1d-BwhoQ/exec"


export const addDistributorship = async (formData) => {

    const ownerName = formData.ownerName
    const whatsappNo = formData.whatsappNo
    const city = formData.city
    const firmName = formData.firmName
    const investment = formData.investment
    const coldStorage = formData.coldStorage

    try {

        const res = await fetch(googleScriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ownerName,
                whatsappNo,
                city,
                firmName,
                investment,
                coldStorage
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        return {successMessage: `Success! You have successfully submitted your distributorship inquiry!`}

    } catch (error) {
        return {errorMessage: `Ooops! There was a problem with your distributorship inquiry!`}
    }
}