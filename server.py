from http.server import HTTPServer, SimpleHTTPRequestHandler
import mimetypes

# Bắt buộc cho service worker
mimetypes.add_type('application/javascript', '.js')

server_address = ("", 8080)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print("Serving at http://localhost:8080")
httpd.serve_forever()
