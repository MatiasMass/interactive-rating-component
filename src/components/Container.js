import './container.css'
import Circle from './Circle'
import Button from './Button'
import MyImage from '../images/icon-star.svg';

const Container = () => {

    return (
        <div className = "container">
            <div className="icon">
                <img src={MyImage} alt="" />
            </div>
            <h2 className="title">How did we do?</h2>
            <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
            <div className="circles">
                <Circle number = "1" choic="1" />
                <Circle number = "2" choic="2" />
                <Circle number = "3" choic="3" />
                <Circle number = "4" choic="4" />
                <Circle number = "5" choic="5" />
            </div>
            <div className="btn">
                <Button />
            </div>
        </div>
    )
}

export default Container