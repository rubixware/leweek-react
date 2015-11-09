var Repo = React.createClass({
  displayName: "Repo",
  getDefaultProps: function() {
    return {
      name: "",
      avatarURL: "",
      starsCount: 0
    };
  },
  render: function(){
    var avatarUrl = this.props.avatarURL;
    var name = this.props.name;
    var stars = this.props.starsCount;
    return(
      <li style={ {margin: "0% 5% 0% 5%", float: "left", position: "relative"} }>
        <div>
          <img src={avatarUrl} width="80" height="80" title="owner image"></img>
          <p>{name}</p>
          <label>Estrellas: {stars}</label>
        </div>
      </li>
    );
  }
});
