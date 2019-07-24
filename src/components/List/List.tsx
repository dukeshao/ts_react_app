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
      <input type="button" onClick={this.hello} value="点击" />
        {this.count}
      </div>
    )
  }
}

export default List;