import { Injectable, OnInit } from '@angular/core';
import * as socketCluster from 'socketcluster-client';

@Injectable({
  providedIn: 'root'
})
export class NotoficationService implements OnInit {

  socket = socketCluster.create({
    hostname: "localhost",
    port: 8000,
  });


  constructor() {

    //subscribe to the server channel and listen for messages(notifications)
    (async () => {
      let channel = this.socket.subscribe("channelName");
      //send data to the  server
      this.socket.transmit("channelName", "Hi Im a new client ");

      for await (let data of channel) {
        // ... Handle channel data.
        alert(data + " data received from server");
        
      }
    })();
  }

  ngOnInit(): void {

  }
}
