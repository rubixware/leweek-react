var RepoList = React.createClass({
  displayName: "RepoList",
  getDefaultProps: function() {
    return {
      apiURL: "https://api.github.com/search/repositories"
    };
  },
  getInitialState: function() {
    return {
      repos: [],
      inputRepo: ""
    };
  },
  onInputChange: function (event) {
    this.setState({
      inputRepo: event.target.value
    });
  },
  fetchOneObjectRepo: function (repoName) {
    var fullURL = this.props.apiURL+"?q="+repoName;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if (request.readyState == request.DONE) {
        if (request.status == 200 && request.response != null) {
          var responseObjects = JSON.parse(request.response);
          var responseObject = responseObjects.items[0];
          var repo = {
            name: responseObject.name,
            avatarURL: responseObject.owner.avatar_url,
            starsCount: responseObject.stargazers_count
            };
          var repos = this.state.repos;
          repos.push(repo);
          this.setState({
            repos: repos
          });
        }
      }
    }.bind(this);
    request.open('GET', fullURL, true);
    request.send();
  },
  addRepo: function (event) {
    var newRepo = this.state.inputRepo;
    if (newRepo != "" && newRepo.length > 0) {
    var objectRepo = this.fetchOneObjectRepo(newRepo);
      this.setState({
        inputRepo: ""
      });
    }
  },
  removeRepo: function (event) {
    var repos = this.state.repos;
    repos.pop();
    this.setState({
      repos: repos
    });
  },
  onKeyPressInputValue: function (event) {
    if (event.keyCode == 13) {
      this.addRepo(event);
    }
  },
  render: function () {
    return(
      <div>
        <div style={ {display: "inline", clear: "both"} }>
          <input type="text"
              onKeyUp={this.onKeyPressInputValue}
              onChange={this.onInputChange}
              value={this.state.inputRepo}></input>
            <button className="button-primary" onClick={this.addRepo}>Agregar repositorio</button>
            <button className="button-default" onClick={this.removeRepo}>Eliminar repositorio</button>
        </div>
        <ul style={{display: "block", listStyle: "none"}}>{
            this.state.repos.map(function(repo, index){
              return(
                <Repo key={index}
                  name={repo.name}
                  avatarURL={repo.avatarURL}
                  starsCount={repo.starsCount}>
                </Repo>
              );
            })
          }</ul>
      </div>
    );
  }
});
