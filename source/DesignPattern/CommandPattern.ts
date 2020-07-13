interface Command {
  execute(): void;
}

class Light {
  on() {
    console.log("전등 킴");
  }
  off() {
    console.log("전등 끔");
  }
}

class GarageDoor {
  up() {
    console.log("창고 문 올라가요");
  }
  down() {
    console.log("창고 문 내려가요");
  }
  lightOn() {
    console.log("창고 불 켜요");
  }
  lightOff() {
    console.log("창고 불 꺼요");
  }
}

class GarageDoorCommand implements Command {
  garageDoor: GarageDoor;
  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }
  execute() {
    this.garageDoor.up();
  }
}

class LightOnCommand implements Command {
  public light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(public light: Light) {}
  execute() {
    this.light.off();
  }
}

class Stereo {
  on() {
    console.log("스트레오 킴");
  }
  off() {
    console.log("스테레오 끔");
  }
  setCd() {
    console.log("시디 설정");
  }
  setDvd() {
    console.log("디비디 설정");
  }
  setRadio() {
    console.log("라디오 설정");
  }
  setVolume(volume: number) {
    console.log("볼륨 설정 : " + volume.toString());
  }
}

class StereoOnWithCDCommand implements Command {
  constructor(public stereo: Stereo) {}
  execute() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }
}

class NoCommand implements Command {
  execute() {}
}

class RemoteControl {
  onCommands: Command[];
  offCommand: Command[];
  constructor() {
    let noCommand = new NoCommand();
    this.onCommands = Array.from({ length: 6 }, () => noCommand);
    this.offCommand = Array.from({ length: 6 }, () => noCommand);
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommand[slot] = offCommand;
  }
  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
  }
  offButtonWasPushed(slot: number) {
    this.offCommand[slot].execute();
  }
}
