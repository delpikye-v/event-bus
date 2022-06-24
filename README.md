<div align="center">
    <h1>event-bus-ez</h1>
    <br />
    <a href="https://codesandbox.io/s/d5robq">LIVE EXAMPLE</a>
</div>

---

#### Description

+ Simple EventBus (EventEmitter)

---

#### Usage
```js
npm install event-bus-ez
```

Import the module in the place you want to use:
```js

import EventBus from 'event-bus-ez'
```

#### Snippet

##### `simple`

```js
    // EventBus.$emit => notify event(name, data)
    // EventBus.$on => register event(name, func)
    // EventBus.$once => register event(name, func)
    // EventBus.$off => off event (name, func)
    // EventBus.$offAll => offAll event(name)

    React.useEffect(() => {
        EventBus.$on("abc", func)
        // EventBus.$on("def", func2)
        // EventBus.$on("xzy", func3)

        // clean 
        return function() {
            EventBus.$off("abc", func)
            //...
        }
    }, [])

    // @ts-ignore
    const func = (item, xxx) => {
        // do something
      alert(item)
    }

    buttonClick = () => {
        EventBus.$emit("abc", 434, 44)
        // EventBus.$emit("abc", 434, 44, 44, "434")
    }
```

<br />


---

#### props


<br />

#### RUN

<a href="https://codesandbox.io/s/d5robq">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
