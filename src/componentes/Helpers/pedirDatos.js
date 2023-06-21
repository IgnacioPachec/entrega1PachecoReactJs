import Mock_Data from "../Data/Mock_Data.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Mock_Data)
        }, 1000)
    })
}