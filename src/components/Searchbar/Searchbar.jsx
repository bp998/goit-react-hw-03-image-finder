import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    images: [],
    inputSearch: '',
  };

  componentDidMount() {
    console.log('did mount');
  }

  fetchImages = async () => {
    try {
      const { inputSearch } = this.state;
      const response = await fetch(
        `https://pixabay.com/api/?key=35262947-7b4d084d7b454f8881faebde2&q=${inputSearch}&image_type=photo`
      );
      const data = await response.json();
      this.setState(prevState => ({ ...prevState, images: data.hits }));
      console.log(this.state, 'fetch');
    } catch (error) {
      console.log('err');
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchImages();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              name="inputSearch"
              onChange={this.handleChange}
              type="text"
              value={this.state.value}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            name="inputSearch"
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
          />
          <button type="submit">Znajdz</button>
        </form> */}
      </div>
    );
  }
}

export default Searchbar;
