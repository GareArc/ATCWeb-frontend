export function getOption(target="body"): any {
    return {
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)",
        target: document.querySelector(target)
    }
}
