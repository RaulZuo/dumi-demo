## API1

面向 xxx 场景下的 xxx API，实现了一下几个功能

- 功能 1
- 功能 2

### API

### 如何使用

```tsx | pure
import { useEffect } from 'react';
import Api from '@xxxx/api1';

export default () => {
  const getData = () => {
    Api().then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>XXXX1</div>;
};
```

## API2

面向 xxx 场景下的 xxx API，实现了一下几个功能

- 功能 1
- 功能 2

### 如何使用

```tsx | pure
import Api from '@xxxx/api2';

export default () => {
  const getData = () => {
    Api().then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>XXXX2</div>;
};
```
