# Techuz Test 3:

Look into test_file.js This is your file where you are going to perform your code.

Function explaination: 

1. constructor

constructor should have 1 parameter which will accept the first initial list of students in array of objects and it will store them for next operations.

2. mergeStudents

This function will accept 1 parameter in which you'll get another array and you need to merge that array with the original array.

3. filterStudents

This function accepts 2 parameters (key, value), you need to filter the records based on these 2 parameters.
-> if key='name', value='tech' then you will need to filter the record and it should return all the records who's name includes word 'tech'.

4. sortStudents

Here you need to sort students by name but based on div.
```bash
Example: 
const arr = [
    { name: 'Jainam', div: 'A' }, 
    { name: 'Parshwa', div: 'B' }, 
    { name: 'Ashish', div: 'A' },
    { name: 'Ankush', div: 'B' }
]
Result:
const arr = [
    { name: 'Ashish', div: 'A' }, 
    { name: 'Jainam', div: 'A' }, 
    { name: 'Ankush', div: 'B' }
    { name: 'Parshwa', div: 'B' }
]
```

5. getDivisions

Here you need to return an array which will consists of all the division which are available in the array in alphabetical order.
```bash
Example: 
const arr = [
    { name: 'Jainam', div: 'A' }, 
    { name: 'Parshwa', div: 'B' }, 
    { name: 'Ashish', div: 'A' },
    { name: 'Ankush', div: 'B' }
];
Result:
const arr = ['A', 'B']
```

6. countStudents

Here you need to count number of students in each division and return an array for the same.
```bash
Example: 
const arr = [
    { name: 'Jainam', div: 'A' }, 
    { name: 'Parshwa', div: 'B' }, 
    { name: 'Ashish', div: 'A' },
    { name: 'Ankush', div: 'B' }
]
Result:
const arr = [
    { 'A': 2 },
    { 'B': 2 }
]
```

7. divideStudents

Here you need to divide the students based on their div and assign students in respective div.
```bash
Example: 
const arr = [
    { name: 'Jainam', div: 'A' }, 
    { name: 'Parshwa', div: 'B' }, 
    { name: 'Ashish', div: 'A' },
    { name: 'Ankush', div: 'B' }
]
Result:
const arr = [
    { 'A': [{ name: 'Jainam' }, { name: 'Ashish' }] },
    { 'B': [{ name: 'Parshwa' }, { name: 'Ankush' }] }
]
```

## Notes
1. Try to make a class reusable so that we can chain the requests
ie: students.mergeStudents(STUDENTS).filterStudents('name', 'tech').sortStudents();
2. Try to use destructuring as much as possible.


## Cloning

```bash
git clone git@github.com:techuz-2023/techuz-test-3.git
```

Then go to the cloned repo, create your branch and install dependancies:
```bash
cd ./techuz-test-3

git checkout -b YOUR_NAME

npm install
```

To execute your file. you have to run the command below: 

```bash
npm run execute
```

## Submission

Once you are done with the code, Push your branch and generate a pull request to master branch.

Make sure you do not make mistakes you did in previous 2 tests.

DO NOT MERGE your pull request by yourself.
