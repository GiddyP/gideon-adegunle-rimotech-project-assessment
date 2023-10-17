export class AutoTyping {
  private selector: string;
  private text: string[];
  private typeSpeed: number;
  private deleteSpeed: number;
  private waitBeforeDelete: number;
  private waitBetweenWords: number;
  private writeWhole: boolean;
  private el: HTMLElement | null;

  constructor (
    selector: string,
    text: string[],
    {
      typeSpeed = 150,
      deleteSpeed = 150,
      waitBeforeDelete = 1000,
      waitBetweenWords = 1000,
      writeWhole = false,
    }: {
      typeSpeed?: number;
      deleteSpeed?: number;
      waitBeforeDelete?: number;
      waitBetweenWords?: number;
      writeWhole?: boolean;
    } = {}
  ) {
    this.selector = selector;
    this.text = text;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.waitBeforeDelete = waitBeforeDelete;
    this.waitBetweenWords = waitBetweenWords;
    this.writeWhole = writeWhole;
    this.el = document.querySelector(selector);
  }

  async start () {
    for (let e = 0; e < this.text.length; e++) {
      const t = this.text[e];
      let r = t.split("");
      if (this.writeWhole) r = [t];
      await this.writeText(r);
      if (e === this.text.length - 1) e = -1;
    }
  }

  writeText (e: string[]): Promise<void> {
    return new Promise<void>((resolve) => {
      const n = this.el;
      let i = false;
      let o: NodeJS.Timeout;

      o = setInterval(() => {
        let l = e.shift();
        if (i) {
          i = false;
          l = " " + l;
        }
        i = " " === l;
        if (n) n.innerText += l;
        if (e.length === 0) {
          clearInterval(o);
          setTimeout(() => {
            let e = setInterval(() => {
              const i = n ? n.innerText : "";
              if (this.writeWhole) {
                if (n) n.innerText = "";
              } else {
                if (n) n.innerText = i.substr(0, i.length - 1);
              }
              if (n && n.innerText.length === 0) {
                clearInterval(e);
                setTimeout(() => resolve(), this.waitBetweenWords);
              }
            }, this.deleteSpeed);
          }, this.waitBeforeDelete);
        }
      }, this.typeSpeed);
    });
  }
}