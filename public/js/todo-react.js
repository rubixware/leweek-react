var TodoList = React.createClass({

  render: function() {
    return (
      React.createElement("div",null,
        React.createElement("ol",
          {id: "list", style: {textAlign: "left"}}),
        React.createElement("input",
          {id: "source", type: "text"}),
        React.createElement("button",
          {id: "add"},"Agregar elemento"),
        React.createElement("button",
          {id: "remove"},"Eliminar elemento")
      )
    );
  }

});
