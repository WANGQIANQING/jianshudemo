import React, {Component} from 'react';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper, SearchInfo
    , SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';


class Header extends Component {
    render() {
        const {focused, inputFocus, inputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={300}
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => inputFocus(list)}
                                onBlur={inputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe62d;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Btn className="write"><span className="iconfont">&#xe66f;</span>写文章</Btn>
                    <Btn className="reg">注册</Btn>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea() {
        const {focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList) {
            for (let i = (page - 1) * 12; i < (jsList.length < page * 12 ? jsList.length : page * 12); i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                );
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {
                                this.spinIcon = icon
                            }} className='iconfont spin'>&#xe746;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        inputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        inputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }

            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
