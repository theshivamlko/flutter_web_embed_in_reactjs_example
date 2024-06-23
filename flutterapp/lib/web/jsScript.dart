// Function to be called from JavaScript
import 'dart:js_interop';

@JSExport("sendMessageToFlutter")
void sendMessageToFlutter(String message) {
  print("sendMessageToFlutter: $message");
}

/*@JS()
external set sendMessage(String value);*/
