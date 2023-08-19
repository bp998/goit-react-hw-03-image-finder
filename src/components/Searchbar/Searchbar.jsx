import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    images: [],
    inputSearch: '',
  };

  componentDidMount() {
    console.log('tutaj będzie ładowane gallery na start');
  }

  fetchImages = async () => {
    console.log(this.state);
    try {
      const { inputSearch } = this.state;
      const response = await fetch(
        `https://pixabay.com/api/?key=35262947-7b4d084d7b454f8881faebde2&q=${inputSearch}&image_type=photo`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('err');
    }
  };

  handleSubmit = e => {
    console.log(this);
    e.preventDefault();
    this.fetchImages();
  };

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="inputSearch"
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
          />
          <button type="submit">Znajdz</button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
