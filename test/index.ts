import log from "../src"

const main = async () => {
    log({a: 123,b(){}})
    log.warn("xxx","x2")
    log.success("xxx")
    log.info("xxx")
    log.error("xxx")
}
main().catch()