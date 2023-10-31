const Main = () => {
    const str = '20.10.2395 Ваша заявка с номером #482784 офррмлена'
    const reg = /(\d{2}\.){2}(19\d{2}|2(0|1|2)\d{2}|\d{2})(?!\d)/

    console.log('!!!', reg.exec(str))
    console.log('----------------')
    return (
        <div>
            Main
        </div>
    )
}

export default Main
