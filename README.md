# Luxon-Utils

## Functionality

- Split a time range into chunks (like days)

## Install

```bash
npm install luxon-utils
```

## Example

Code

```javascript
let start = DateTime.utc(2023, 3, 24, 15, 42, 39).setZone("Europe/Helsinki");
let end = DateTime.utc(2023, 3, 28, 9, 56, 12).setZone("Europe/Helsinki");

console.log(luxon_split_into(start, end, "days", "hours"));
```

Output

```javascript
[
  {
    start: '2023-03-24T17:42:39.000+02:00',
    end: '2023-03-25T00:00:00.000+02:00',
    hours: 6.289166666666667
  },
  {
    start: '2023-03-25T00:00:00.000+02:00',
    end: '2023-03-26T00:00:00.000+02:00',
    hours: 24
  },
  {
    start: '2023-03-26T00:00:00.000+02:00',
    end: '2023-03-27T00:00:00.000+03:00',
    hours: 23
  },
  {
    start: '2023-03-27T00:00:00.000+03:00',
    end: '2023-03-28T00:00:00.000+03:00',
    hours: 24
  },
  {
    start: '2023-03-28T00:00:00.000+03:00',
    end: '2023-03-28T12:56:12.000+03:00',
    hours: 12.936666666666667
  }
```
