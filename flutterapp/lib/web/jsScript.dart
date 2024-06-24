import 'dart:async';
import 'package:js/js.dart';
import 'package:js/js_util.dart';

@JS('functionName')
external set _functionName(void Function(String) f);

@JS()
external void functionName(String message);

// Combined StreamController
final _messageController = StreamController<String>.broadcast();

// Stream that acts as both a sink and a stream
Stream<String> get processedMessages async* {
  _functionName = allowInterop((message) {
    _messageController.sink.add(message); // Sink: Add message to the stream
  });

  await for (final event in _messageController.stream) {
    yield event; // Stream: Yield processed message
  }
}

@JS('flutterToReact')
external set _flutterToReact(void Function(String) f);

@JS()
external void flutterToReact(String message);

void setupFlutterToReact() {
  _flutterToReact = allowInterop((message) {
    print("setupFlutterToReact $message");
    // Call the JavaScript callback function with the message
  });
}

void main() {
  // _functionName = allowInterop(_someDartFunction);
}
