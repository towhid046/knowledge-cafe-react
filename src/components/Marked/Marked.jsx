
import  PropTypes  from 'prop-types';

const Marked = ({marked}) => {
    const {title} = marked
    return (
        <>
        <div className="p-5 rounded-xl bg-white">
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      </>
    );
};

Marked.propTypes = {
    marked: PropTypes.object
}

export default Marked;