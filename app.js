let ans = 0
let v = 0
let t = ""
let s,sb,m,d,e,n = false

function c(){
    ans,v = 0
    t = ""
    s,sb,m,d,e,n = false
    document.getElementById("digit").innerText = v
}

function sum(){
    if(n==true){
        if(e==true){
            if(n==true){
                n = false
                v = ans
            }
            e = false
            document.getElementById("digit").innerText = v
        }else{
            v += ans
            document.getElementById("digit").innerText = v
            ans = 0
        }
    }
    t = ""
    s = true
}

function sub(){
    if(n==true){
        if(e==true){
            if(n==true){
                n = false
                v = ans
            }
            e = false
            document.getElementById("digit").innerText = v
        }else{
            v -= ans
            document.getElementById("digit").innerText = v
            ans = 0
        }
    }
    t = ""
    sb = true
}

function mul(){
    if(n==true){
        if(e==true){
            if(n==true){
                n = false
                v = ans
            }
            e = false
            document.getElementById("digit").innerText = v
        }else{
            if(v==0){
                v = 1
            }
            v *= ans
            document.getElementById("digit").innerText = v
            ans = 0
        }
    }
    t = ""
    m = true
}

function div(){
    if(n==true){
        if(e==true){
            if(n==true){
                n = false
                v = ans
            }
            e = false
            document.getElementById("digit").innerText = v
        }else{
            if(v==0){
                v = ans
                document.getElementById("digit").innerText = v
            }else{
                v /= ans
                document.getElementById("digit").innerText = v
            }
            ans = 0
        }
    }
    t = "" 
    d = true
}

function equal(){
    if(n==true){
        if(s==true){
            v += ans
            s = false
        }else if(sb==true){
            v -= ans
            sb = false
        }else if(m==true){
            v *= ans
            m = false
        }else if(d==true){
            v /= ans
            d = false
        }else{
            v = ans
        }
    }
    t = ""
    document.getElementById("digit").innerText = v
    ans = 0
    e = true
    n = false
}

function digit(x){
    n = true
    t += x
    ans = +t
    document.getElementById("digit").innerText = t 
}

