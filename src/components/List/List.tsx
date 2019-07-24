import React, {Component} from "react";

interface P {
  color: string,
  size?: string
}
interface S {
  count: number
}
class List extends Component<P, S> {
  public count = 7
  public hello = (): void => {
    console.log(666)
  }
  render() {
    return (
      <div>
        这是列表页
      <button onClick={this.hello}>点击</button>
        {this.count}
      </div>
    )
  }
}

export default List;