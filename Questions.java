import java.util.*;

public class Main {
    public static void main(String[] args) {
        Quiz q = new Quiz();
        q.logic();
        System.out.println("You have finished the quiz! Thank you!");
    }
}

class Quiz {
    Scanner sc = new Scanner(System.in);

    public void logic() {
        int correctans = 0;
        int wrongans = 0;

        // Define your questions here
        Questions q1 = new Questions("What is the default value of a boolean variable in Java?", "a) true", "b) false", "c) 0", "d) 1");
        Questions q2 = new Questions("Which of the following is not a primitive data type in Java?", "a) int", "b) string", "c) double", "d) char");
        Questions q3 = new Questions("What is the size of int variable in Java?", "a) 4 bytes", "b) 2 bytes", "c) 8 bytes", "d) 1 byte");
        Questions q4 = new Questions("What is the result of 3 + 5 * 2?", "a) 16", "b) 13", "c) 11", "d) 10");
        Questions q5 = new Questions("Which keyword is used to prevent method overriding in Java?", "a) override", "b) final", "c) static", "d) private");
        Questions q6 = new Questions("What is the superclass of all classes in Java?", "a) Object", "b) Super", "c) Base", "d) Parent");
        Questions q7 = new Questions("What is the purpose of the 'static' keyword in Java?", "a) To make a variable constant", "b) To access class variables and methods", "c) To define a subclass", "d) To make a method synchronized");
        Questions q8 = new Questions("What is the purpose of the 'this' keyword in Java?", "a) To refer to the current instance of the class", "b) To create a new instance of the class", "c) To call a superclass constructor", "d) To access static variables");
        Questions q9 = new Questions("Which of the following is an interface in Java?", "a) ArrayList", "b) LinkedList", "c) Map", "d) Runnable");
        Questions q10 = new Questions("What is the output of 'System.out.println(10/3)?'", "a) 3.333", "b) 3", "c) 3.0", "d) 3.3333");

        // Store questions and correct answers in a map
        Map<Questions, Character> hmap = new HashMap<>();
        hmap.put(q1, 'b');
        hmap.put(q2, 'b');
        hmap.put(q3, 'a');
        hmap.put(q4, 'c');
        hmap.put(q5, 'b');
        hmap.put(q6, 'a');
        hmap.put(q7, 'b');
        hmap.put(q8, 'a');
        hmap.put(q9, 'd');
        hmap.put(q10, 'b');

        // Iterate through the questions and present them to the user
        for (Map.Entry<Questions, Character> map : hmap.entrySet()) {
            System.out.println(map.getKey().getQuestion());
            System.out.println(map.getKey().getOp1());
            System.out.println(map.getKey().getOp2());
            System.out.println(map.getKey().getOp3());
            System.out.println(map.getKey().getOp4());

            System.out.println("Enter your answer: ");
            Character ans = sc.next().charAt(0); // Only takes zeroeth index as ans
            int cans = Character.compare(ans, map.getValue()); // if ans=map.gV, cans = 0
            if (cans == 0) {
                System.out.println("Correct");
                correctans++;
            } else {
                System.out.println("Wrong");
                wrongans++;
            }
        }

        // Display quiz result
        System.out.println();
        System.out.println("-----RESULT-----");
        System.out.println("Total Questions: " + hmap.size());
        System.out.println("Correct Answers: " + correctans);
        System.out.println("Wrong Answers: " + wrongans);
    }
}

class Questions {
    private final String question;
    private final String op1;
    private final String op2;
    private final String op3;
    private final String op4;

    public Questions(String question, String op1, String op2, String op3, String op4) {
        this.question = question;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
    }

    public String getQuestion() {
        return question;
    }

    public String getOp1() {
        return op1;
    }

    public String getOp2() {
        return op2;
    }

    public String getOp3() {
        return op3;
    }

    public String getOp4() {
        return op4;
    }
}
