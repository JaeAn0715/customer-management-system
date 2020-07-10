import React, { Component } from "react";

class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          name={this.props.name}
          img={this.props.img}
        />
        <CustomerInfo
          bday={this.props.bday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </div>
    );
  }
}

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.name}></img>
        <h2>
          Name:{this.props.name} / ID:{this.props.id}
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.bday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
