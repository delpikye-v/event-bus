<div align="center">
    <h1>event-bus-ez</h1>
    <br />
    <a href="https://codesandbox.io/s/d5robq">LIVE EXAMPLE</a>
</div>

---

#### Description

+ Simple EventBus (EventEmitter)
+ Quick for update. (No need share context with react)

---

#### Usage
```js
npm install event-bus-ez --save
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
    // EventBus.$once => register event(name, func) one time
    // EventBus.$off => off event (name, func)
    // EventBus.$offAll => offAll event(name)

	// EventBus.$reset => clear all event(name) // clear all

	// simple for react-hook js
    React.useEffect(() => {
        EventBus.$on("NAME_ABC", func)
        // EventBus.$on("NAME_DEF", func2)
        // EventBus.$on("xzy", func3)

        // clean
        return function() {
            EventBus.$off("NAME_ABC", func)
            //...EventBus.$off("NAME_DEF", func2)
        }
    }, [])

    // @ts-ignore
    const func = (item, xxx) => {
        // do something
      alert(item)
    }

	// from another element
    buttonClick = () => {
        EventBus.$emit("NAME_ABC", 434, 44)
        // EventBus.$emit("NAME_DEF", [434, 44], 44, "434")
    }
	
	
	// __prBusData => dont change it
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
