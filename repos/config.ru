use Rack::Static,
  :urls => ["/js", "/build", "/css"],
  :root => "./"

map "/repos" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html'
      },
      File.open('index.html', File::RDONLY)
    ]
  }
end
