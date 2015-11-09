use Rack::Static,
  :urls => ["/js", "/build"],
  :root => "./"

map "/todo-react-jsx" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html'
      },
      File.open('todo-react-jsx.html', File::RDONLY)
    ]
  }
end
