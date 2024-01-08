import QuestionCard from '../components/QuestionCard';

function QuestionPage(){

    const questions = [{ id: 1, 'question': 'What is your favorite color? ', 'options':['red','blue','black','yellow','green']}, { id:2, 'question':'What is your favorite brand ?', 'options' :['adidas','nike','supreme','h&m','zara','lululemon','Levis','puma','Prada','ralph lauren','pategonia', 'zara'] },
     { id:3, 'question':'Which weather are you shopping for?', 'options' :['spring','summer','fall', 'winter']}, { id:4, 'question': 'Price Range', 'options': ['25-50','50-100','100-150','150-200','200-250','250-300']} ]

    let answers = []

    
    return(<div className="input-group mb-3">
        {questions.map((data) => (
            <QuestionCard {...data} key={data.id} />
        ))}

    </div>)
}

export default QuestionPage;