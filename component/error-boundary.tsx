import React from "react"
import { Title } from "livi-poc-core"
import { IconReload } from "@tabler/icons-react"

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  //@ts-ignore
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true }
  }
  //@ts-ignore
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo })
  }
  render() {
    // Check if the error is thrown
    //@ts-ignore
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="rounded-lg shadow-lg w-full h-full border border-slate-100 bg-white p-4 flex flex-col justify-center items-center">
          <Title children={'Something went wrong!'} className="my-3 text-2xl"/>
          <button
            type="button"
            //   onClick={() => this.setState({ hasError: false })}
            className="bg-secondary px-4 py-2 min-w-[100px] rounded-lg flex flex-row justify-between items-center"
          >
            <IconReload size={20} />
            <p className="text-primary font-bold">Reload</p>
          </button>
        </div>
      )
    }

    // Return children components in case of no error

    //@ts-ignore
    return this.props.children
  }
}

export default ErrorBoundary