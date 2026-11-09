function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}



function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } 
  else if (typeof input === "number") {
    return input * 10;
  } 
  else {
    return input ? "Active" : "Inactive";
  }
}



function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}





function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}






interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  return courses.filter(
    (course) => course.isPublished === true &&
                course.students >= minStudents
  );
}






class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}





function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}