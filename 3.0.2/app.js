(function(){"use strict";var t={8541:function(t,e,r){var i=r(9242),a=r(8585),n=r(3396),l=r(7139);const o={class:"neos-grid-container"},s=(0,n._)("div",{class:"betri-calc-title"}," Royn Orkuroknaran ",-1),d=(0,n._)("p",null," Niðanfyri kanst tú kanna, hvussu nógv tú kanst spara við at skifta til varandi orkuskipan. ",-1),u={class:"betri-grid-column"},m={class:"betri-card"},c={class:"neos-col-lion-100"},h=(0,n._)("div",{class:"burdardygd-text-bold",style:{"margin-bottom":"10px"}}," Tú ynskir ",-1),g={class:"betri-heating-types"},v={class:"betri-input-label"},y=["value"],p={class:"neos-col--lion-100"},P={class:"clearfix spacer-20"},b=(0,n._)("div",{class:"burdardygd-text-bold",style:{"margin-bottom":"10px"}},"Tú hevur",-1),f={class:"betri-heating-types"},w={class:"betri-input-label"},Y=["value"],A={class:"clearfix spacer-20"},_=(0,n._)("div",{class:"burdardygd-column-left"},[(0,n._)("div",{class:"burdardygd-label-and-input",style:{"margin-top":"5px"}},[(0,n._)("label",{class:"burdardygd-label-title burdardygd-text-bold",for:"OilBoilerConstant"},"Aldur á oljufýri")])],-1),x={class:"burdardygd-column-right"},k={value:"0"},O={value:"1"},V={value:"2"},U={value:"3"},T={class:"clearfix slider-spacer"},K=(0,n._)("div",{class:"burdardygd-column-left margin-bottom"},[(0,n._)("div",{class:"burdardygd-label-and-input"},[(0,n._)("label",{class:"burdardygd-label-title burdardygd-text-bold",for:"oilAmountPrYear"},"Oljunýtsla um árið")])],-1),E={class:"burdardygd-column-right"},S={class:"betri-calc-row",style:{"margin-top":"8px"}},F={class:"betri-currency"},I={class:""},C={class:"betri-currency"},H={class:"burdardygd-label-and-input invisible"},j=(0,n._)("label",{class:"burdardygd-label-title",for:"oilPricePrLiter"},"Verandi oljuprísur per litur",-1),R={class:"burdardygd-label-and-input invisible"},L=(0,n._)("label",{class:"burdardygd-label-title",for:"pricePrKwh"},[(0,n.Uk)("Verandi elprísur per kWh "),(0,n._)("sup",null,"*")],-1),B={class:"clearfix slider-spacer"},z=(0,n._)("div",{class:"burdardygd-column-left margin-bottom"},[(0,n._)("div",{class:"burdardygd-label-and-input"},[(0,n._)("label",{class:"burdardygd-label-title burdardygd-text-bold",for:"investmentAmount"},"Íløgan kostar")])],-1),W={class:"burdardygd-column-right"},Z={class:"betri-calc-row",style:{"margin-top":"8px"}},G={class:"betri-currency"},M={class:""},D={class:"betri-currency"},J=(0,n._)("div",{class:"clearfix spacer-20"},null,-1),N={class:"neos-col--lion-100"},$=(0,n._)("div",{style:{"margin-bottom":"10px"}},"Tú hevur",-1),Q={class:"betri-heating-types"},q={class:"betri-input-label"},X=["value"],tt={class:"burdardygd-label-and-input"},et=(0,n._)("label",{class:"burdardygd-label-title",for:"oilAmountPrYear"},"Árlig oljunýtsla áðrenn bjálving",-1),rt={class:"burdardygd-label-and-input"},it=(0,n._)("label",{class:"burdardygd-label-title",for:"oilAmountAfterInvestmentPrYear"},"Væntandi oljunýtsla eftir bjálving",-1),at={class:"burdardygd-label-and-input"},nt=(0,n._)("label",{class:"burdardygd-label-title",for:"oilPricePrLiter"},"Verandi oljuprísur per litur",-1),lt={class:"burdardygd-label-and-input"},ot=(0,n._)("label",{class:"burdardygd-label-title",for:"oilAmountPrYear"},"Árlig elnýtsla áðrenn bjálving",-1),st={class:"burdardygd-label-and-input"},dt=(0,n._)("label",{class:"burdardygd-label-title",for:"oilAmountAfterInvestmentPrYear"},"Væntandi elnýtsla eftir bjálving",-1),ut={class:"burdardygd-label-and-input"},mt=(0,n._)("label",{class:"burdardygd-label-title",for:"oilPricePrLiter"},"Verandi elprísur per kWh",-1),ct={class:"burdardygd-label-and-input"},ht=(0,n._)("label",{class:"burdardygd-label-title",for:"investmentAmount"},"Íløgan kostar",-1),gt={class:"burdardygd-label-and-input"},vt=(0,n._)("label",{class:"burdardygd-label-title",for:"loanAmount"},"Tín lánstørvur",-1),yt=(0,n._)("small",{class:"betri-footer-text-small"}," Útrokningin er grundað á eitt Orkulán við rentustuðli. ",-1),pt={class:"neos-col--lion-100"},Pt={class:"burdardygd-label-and-input"},bt=(0,n._)("label",{class:"burdardygd-label-title",for:"electricityKwhUsagePrYear"},"Árlig elnýtsla við verandi tóli",-1),ft={class:"burdardygd-label-and-input"},wt=(0,n._)("label",{class:"burdardygd-label-title",for:"pricePrKwh"},"Verandi prísur per kWh",-1),Yt={class:"burdardygd-label-and-input"},At=(0,n._)("label",{class:"burdardygd-label-title",for:"electricityAfterInvestmentKwhUsagePrYear"},"Væntandi árlig elnýtsla við nýggjum tóli",-1),_t={class:"burdardygd-label-and-input"},xt=(0,n._)("label",{class:"burdardygd-label-title",for:"investmentAmount"},"Íløgan kostar",-1),kt={class:"burdardygd-label-and-input"},Ot=(0,n._)("label",{class:"burdardygd-label-title",for:"loanAmount"},"Tín lánstørvur",-1),Vt={class:"neos-col--lion-100"},Ut={class:"burdardygd-label-and-input"},Tt=(0,n._)("label",{class:"burdardygd-label-title",for:"electricityKwhProductionPrYear"},"Árlig framleiðsla",-1),Kt={class:"burdardygd-label-and-input"},Et=(0,n._)("label",{class:"burdardygd-label-title",for:"electricityKwhOwnUsagePrYear"},"Eginnýtsla",-1),St={class:"burdardygd-label-and-input"},Ft=(0,n._)("label",{class:"burdardygd-label-title",for:"electricityUsageCost"},"Kostnaður fyri eginnýtslu",-1),It={class:"burdardygd-label-and-input"},Ct=(0,n._)("label",{class:"burdardygd-label-title",for:"electricityKwhSoldPrYear"},"Søla til SEV",-1),Ht={class:"burdardygd-label-and-input"},jt=(0,n._)("label",{class:"burdardygd-label-title",for:"electricitySellingPrice"},"Prísur fyri sølu per kWh",-1),Rt={class:"burdardygd-label-and-input"},Lt=(0,n._)("label",{class:"burdardygd-label-title",for:"investmentAmount"},"Íløgan kostar",-1),Bt={class:"burdardygd-label-and-input"},zt=(0,n._)("label",{class:"burdardygd-label-title",for:"loanAmount"},"Tín lánstørvur",-1),Wt=(0,n._)("small",{class:"betri-footer-text-small"}," Útrokningin er grundað á eitt Orkulán við rentustuðli. ",-1),Zt={class:"betri-grid-column"},Gt={class:"betri-card"},Mt={class:"betri-loan-output"},Dt={class:"burdardygd-column-left-35"},Jt=(0,n._)("div",{class:"font-size-120-pct burdardygd-text-bold"},"Sparing um árið",-1),Nt={class:"betri-loan-result-top-amount"},$t={class:"betri-currency font-size-120-pct"},Qt={class:"burdardygd-column-right-65"},qt={class:"burdardygd-summary"},Xt=(0,n._)("b",null,"Útrokningin er grundað á:",-1),te={class:"burdardygd-summary-row",style:{"margin-top":"5px"}},ee=(0,n._)("div",{class:"burdardygd-text-left"},"Árlig útreiðsla við oljufýri",-1),re={class:"burdardygd-text-right"},ie={class:"burdardygd-summary-row line"},ae={class:"burdardygd-text-left"},ne={class:"burdardygd-text-right"},le={class:"burdardygd-summary-row line"},oe=(0,n._)("div",{class:"burdardygd-text-left"},"Sparing um mðr.",-1),se={class:"burdardygd-text-right"},de={class:"burdardygd-summary-row line"},ue=(0,n._)("div",{class:"burdardygd-text-left"}," Íløgan er spard inn aftur eftir ",-1),me={class:"burdardygd-text-right"},ce={class:"burdardygd-summary"},he={class:"burdardygd-summary-row"},ge=(0,n._)("div",{class:"burdardygd-text-left"},"Sparing um árið",-1),ve={class:"burdardygd-text-right burdardygd-text-bold"},ye={class:"burdardygd-summary-row"},pe=(0,n._)("div",{class:"burdardygd-text-left"},"Afturgjaldstíð",-1),Pe={class:"burdardygd-text-right"},be={class:"burdardygd-summary"},fe={class:"burdardygd-summary-row"},we=(0,n._)("div",{class:"burdardygd-text-left"},"Avkast um mánaðin",-1),Ye={class:"burdardygd-text-right burdardygd-text-bold"},Ae={class:"burdardygd-summary-row"},_e=(0,n._)("div",{class:"burdardygd-text-left"},"Afturgjaldstíð",-1),xe={class:"burdardygd-text-right"},ke={class:"burdardygd-summary"},Oe={class:"burdardygd-summary-row"},Ve=(0,n._)("div",{class:"burdardygd-text-left"},"Árlig útreiðsla við verandi tóli",-1),Ue={class:"burdardygd-text-right"},Te={class:"burdardygd-summary-row"},Ke=(0,n._)("div",{class:"burdardygd-text-left"},"Árlig útreiðsla við nýggjum tóli",-1),Ee={class:"burdardygd-text-right"},Se={class:"burdardygd-summary-row line"},Fe=(0,n._)("div",{class:"burdardygd-text-left"},"Sparing um árið",-1),Ie={class:"burdardygd-text-right burdardygd-text-bold"},Ce={class:"burdardygd-summary-row"},He=(0,n._)("div",{class:"burdardygd-text-left"},"Afturgjaldstíð",-1),je={class:"burdardygd-text-right"},Re=(0,n._)("div",{style:{clear:"both"}},null,-1),Le=["href"],Be={class:"betri-loan-result-bottom"},ze=(0,n._)("small",{class:"betri-footer-text-small invisible"},"Mánaðargjaldið er tann upphædin tú sparir við at gera hesa burðardyggu umvæling.",-1),We=[ze],Ze={class:"betri-loan-result-bottom"},Ge=(0,n._)("small",{class:"betri-footer-text-small"},"Mánaðargjaldið er tann upphædin tú sparir við at gera hesa burðardyggu umvæling.",-1),Me=(0,n._)("br",null,null,-1),De=(0,n._)("small",{class:"betri-footer-text-small"},"Gev gætur, at tað í flestu førum loysir seg betur fíggjarliga at skifta til varandi orkuskipan, í staðin fyri at bjálva bústaðin.",-1),Je=[Ge,Me,De],Ne={class:"betri-loan-result-bottom"},$e=(0,n._)("small",{class:"betri-footer-text-small"},"Mánaðargjaldið er tann upphædin tú sparir við at gera hesa burðardyggu umvæling.",-1),Qe=[$e],qe={class:"betri-loan-result-bottom"},Xe=(0,n._)("small",{class:"betri-footer-text-small"},"Mánaðargjaldið er tann upphædin tú sparir við at gera hesa burðardyggu umvæling.",-1),tr=[Xe],er={class:"betri-grid-column"},rr={class:"betri-footer-text"},ir={class:"betri-footer-text-small"},ar=(0,n._)("span",null,"Fyrivarni: ",-1),nr=(0,n._)("br",null,null,-1),lr=(0,n._)("br",null,null,-1);function or(t,e,r,a,ze,Ge){const Me=(0,n.up)("slider"),De=(0,n.up)("money3");return(0,n.wg)(),(0,n.iD)("div",o,[s,d,(0,n._)("div",u,[(0,n._)("div",m,[(0,n._)("div",c,[h,(0,n._)("div",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Ge.renovationTypes,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"betri-input-radio"},[(0,n._)("label",v,[(0,n.wy)((0,n._)("input",{type:"radio",value:t,"onUpdate:modelValue":e[0]||(e[0]=t=>ze.renovation.RenovationType=t),onChange:e[1]||(e[1]=(...t)=>Ge.onRenovationTypeChanged&&Ge.onRenovationTypeChanged(...t))},null,40,y),[[i.G2,ze.renovation.RenovationType]]),(0,n.Uk)((0,l.zw)(t),1)])])))),128))])]),(0,n.wy)((0,n._)("div",p,[(0,n._)("div",P,[b,(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Ge.heatingTypes,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"betri-input-radio"},[(0,n._)("label",w,[(0,n.wy)((0,n._)("input",{type:"radio",value:t,"onUpdate:modelValue":e[2]||(e[2]=t=>ze.renovation.HeatingType=t),onChange:e[3]||(e[3]=(...t)=>Ge.onHeatingTypeChanged&&Ge.onHeatingTypeChanged(...t))},null,40,Y),[[i.G2,ze.renovation.HeatingType]]),(0,n.Uk)((0,l.zw)(t),1)])])))),128))])]),(0,n._)("div",A,[_,(0,n._)("div",x,[(0,n.wy)((0,n._)("select",{name:"OilBoilerIndex","onUpdate:modelValue":e[4]||(e[4]=t=>ze.renovation.OilBoilerIndex=t),onChange:e[5]||(e[5]=(...t)=>Ge.onHeatingTypeChanged&&Ge.onHeatingTypeChanged(...t)),style:{padding:"0px 0px 0px 15px"}},[(0,n._)("option",k,(0,l.zw)(Ge.oilBoilerOptions[0].text),1),(0,n._)("option",O,(0,l.zw)(Ge.oilBoilerOptions[1].text),1),(0,n._)("option",V,(0,l.zw)(Ge.oilBoilerOptions[2].text),1),(0,n._)("option",U,(0,l.zw)(Ge.oilBoilerOptions[3].text),1)],544),[[i.bM,ze.renovation.OilBoilerIndex]])])]),(0,n._)("div",T,[K,(0,n._)("div",E,[(0,n.Wm)(Me,{onChange:Ge.onHeatingTypeChanged,onUpdate:Ge.onHeatingTypeChanged,name:"oilAmountPrYear",modelValue:ze.renovation.oilAmountPrYear,"onUpdate:modelValue":e[6]||(e[6]=t=>ze.renovation.oilAmountPrYear=t),format:ze.sliderLiterFormat,min:ze.renovation.minOilAmountPrYear,max:ze.renovation.maxOilAmountPrYear,step:100},null,8,["onChange","onUpdate","modelValue","format","min","max"]),(0,n._)("div",S,[(0,n._)("span",F,(0,l.zw)(this.formatPrice(ze.renovation.minOilAmountPrYear,0))+" litrar",1),(0,n._)("div",I,[(0,n._)("span",C,(0,l.zw)(this.formatPrice(ze.renovation.maxOilAmountPrYear,0))+" litrar",1)])])])]),(0,n._)("div",H,[j,(0,n.Wm)(De,(0,n.dG)({name:"oilPricePrLiter",modelValue:ze.renovation.oilPricePrLiter,"onUpdate:modelValue":e[7]||(e[7]=t=>ze.renovation.oilPricePrLiter=t)},ze.moneyDec),null,16,["modelValue"])]),(0,n._)("div",R,[L,(0,n.Wm)(De,(0,n.dG)({name:"pricePrKwh",modelValue:ze.renovation.pricePrKwh,"onUpdate:modelValue":e[8]||(e[8]=t=>ze.renovation.pricePrKwh=t)},ze.moneyDec),null,16,["modelValue"])]),(0,n._)("div",B,[z,(0,n._)("div",W,[(0,n.Wm)(Me,{name:"investmentAmount",modelValue:ze.renovation.investmentAmount,"onUpdate:modelValue":e[9]||(e[9]=t=>ze.renovation.investmentAmount=t),format:ze.sliderCurrencyFormat,min:ze.renovation.minInvestmentAmount,max:ze.renovation.maxInvestmentAmount,step:5e3},null,8,["modelValue","format","min","max"]),(0,n._)("div",Z,[(0,n._)("span",G,(0,l.zw)(this.formatPrice(ze.renovation.minInvestmentAmount,0))+" kr.",1),(0,n._)("div",M,[(0,n._)("span",D,(0,l.zw)(this.formatPrice(ze.renovation.maxInvestmentAmount,0))+" kr.",1)])])])]),J],512),[[i.F8,Ge.isJardhiti||Ge.isHitapumpa]]),(0,n.wy)((0,n._)("div",N,[$,(0,n._)("div",Q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Ge.heatingSystems,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"betri-input-radio"},[(0,n._)("label",q,[(0,n.wy)((0,n._)("input",{type:"radio",value:t,"onUpdate:modelValue":e[10]||(e[10]=t=>ze.renovation.HeatingSystem=t),onChange:e[11]||(e[11]=(...t)=>Ge.onHeatingSystemChanged&&Ge.onHeatingSystemChanged(...t))},null,40,X),[[i.G2,ze.renovation.HeatingSystem]]),(0,n.Uk)((0,l.zw)(t),1)])])))),128))]),(0,n.wy)((0,n._)("div",null,[(0,n._)("div",tt,[et,(0,n.Wm)(De,(0,n.dG)({name:"oilAmountPrYear",modelValue:ze.renovation.oilAmountPrYear,"onUpdate:modelValue":e[12]||(e[12]=t=>ze.renovation.oilAmountPrYear=t)},ze.liter),null,16,["modelValue"])]),(0,n._)("div",rt,[it,(0,n.Wm)(De,(0,n.dG)({name:"oilAmountAfterInvestmentPrYear",modelValue:ze.renovation.oilAmountAfterInvestmentPrYear,"onUpdate:modelValue":e[13]||(e[13]=t=>ze.renovation.oilAmountAfterInvestmentPrYear=t)},ze.liter),null,16,["modelValue"])]),(0,n._)("div",at,[nt,(0,n.Wm)(De,(0,n.dG)({name:"oilPricePrLiter",modelValue:ze.renovation.oilPricePrLiter,"onUpdate:modelValue":e[14]||(e[14]=t=>ze.renovation.oilPricePrLiter=t)},ze.moneyDec),null,16,["modelValue"])])],512),[[i.F8,Ge.isOilHeatingSystem]]),(0,n.wy)((0,n._)("div",null,[(0,n._)("div",lt,[ot,(0,n.Wm)(De,(0,n.dG)({name:"oilAmountPrYear",modelValue:ze.renovation.oilAmountPrYear,"onUpdate:modelValue":e[15]||(e[15]=t=>ze.renovation.oilAmountPrYear=t)},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",st,[dt,(0,n.Wm)(De,(0,n.dG)({name:"oilAmountAfterInvestmentPrYear",modelValue:ze.renovation.oilAmountAfterInvestmentPrYear,"onUpdate:modelValue":e[16]||(e[16]=t=>ze.renovation.oilAmountAfterInvestmentPrYear=t)},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",ut,[mt,(0,n.Wm)(De,(0,n.dG)({name:"oilPricePrLiter",modelValue:ze.renovation.oilPricePrLiter,"onUpdate:modelValue":e[17]||(e[17]=t=>ze.renovation.oilPricePrLiter=t)},ze.moneyDec),null,16,["modelValue"])])],512),[[i.F8,!Ge.isOilHeatingSystem]]),(0,n._)("div",ct,[ht,(0,n.Wm)(De,(0,n.dG)({name:"investmentAmount",modelValue:ze.renovation.investmentAmount,"onUpdate:modelValue":e[18]||(e[18]=t=>ze.renovation.investmentAmount=t)},ze.money),null,16,["modelValue"])]),(0,n._)("div",gt,[vt,(0,n.Wm)(De,(0,n.dG)({name:"loanAmount",modelValue:ze.renovation.loanAmount,"onUpdate:modelValue":e[19]||(e[19]=t=>ze.renovation.loanAmount=t)},ze.money),null,16,["modelValue"])]),yt],512),[[i.F8,Ge.isBjalving]]),(0,n.wy)((0,n._)("div",pt,[(0,n._)("div",Pt,[bt,(0,n.Wm)(De,(0,n.dG)({name:"electricityKwhUsagePrYear",modelValue:ze.renovation.electricityKwhUsagePrYear,"onUpdate:modelValue":e[20]||(e[20]=t=>ze.renovation.electricityKwhUsagePrYear=t)},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",ft,[wt,(0,n.Wm)(De,(0,n.dG)({name:"pricePrKwh",modelValue:ze.renovation.pricePrKwh,"onUpdate:modelValue":e[21]||(e[21]=t=>ze.renovation.pricePrKwh=t)},ze.moneyDec),null,16,["modelValue"])]),(0,n._)("div",Yt,[At,(0,n.Wm)(De,(0,n.dG)({name:"electricityAfterInvestmentKwhUsagePrYear",modelValue:ze.renovation.electricityAfterInvestmentKwhUsagePrYear,"onUpdate:modelValue":e[22]||(e[22]=t=>ze.renovation.electricityAfterInvestmentKwhUsagePrYear=t)},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",_t,[xt,(0,n.Wm)(De,(0,n.dG)({name:"investmentAmount",modelValue:ze.renovation.investmentAmount,"onUpdate:modelValue":e[23]||(e[23]=t=>ze.renovation.investmentAmount=t)},ze.money),null,16,["modelValue"])]),(0,n._)("div",kt,[Ot,(0,n.Wm)(De,(0,n.dG)({name:"loanAmount",modelValue:ze.renovation.loanAmount,"onUpdate:modelValue":e[24]||(e[24]=t=>ze.renovation.loanAmount=t)},ze.money),null,16,["modelValue"])])],512),[[i.F8,Ge.isHusarhaldstol]]),(0,n.wy)((0,n._)("div",Vt,[(0,n._)("div",Ut,[Tt,(0,n.Wm)(De,(0,n.dG)({name:"electricityKwhProductionPrYear",modelValue:ze.renovation.electricityKwhProductionPrYear,"onUpdate:modelValue":e[25]||(e[25]=t=>ze.renovation.electricityKwhProductionPrYear=t)},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",Kt,[Et,(0,n.Wm)(De,(0,n.dG)({name:"electricityKwhOwnUsagePrYear",modelValue:ze.renovation.electricityKwhOwnUsagePrYear,"onUpdate:modelValue":e[26]||(e[26]=t=>ze.renovation.electricityKwhOwnUsagePrYear=t)},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",St,[Ft,(0,n.Wm)(De,(0,n.dG)({name:"electricityUsageCost",modelValue:ze.renovation.electricityUsageCost,"onUpdate:modelValue":e[27]||(e[27]=t=>ze.renovation.electricityUsageCost=t),modelModifiers:{lazy:!0}},ze.moneyDec),null,16,["modelValue"])]),(0,n._)("div",It,[Ct,(0,n.Wm)(De,(0,n.dG)({name:"electricityKwhSoldPrYear",modelValue:Ge.electricityKwhSoldPrYear,"onUpdate:modelValue":e[28]||(e[28]=t=>Ge.electricityKwhSoldPrYear=t),modelModifiers:{lazy:!0},readonly:"true"},ze.kwh),null,16,["modelValue"])]),(0,n._)("div",Ht,[jt,(0,n.Wm)(De,(0,n.dG)({name:"electricitySellingPrice",modelValue:ze.renovation.electricitySellingPrice,"onUpdate:modelValue":e[29]||(e[29]=t=>ze.renovation.electricitySellingPrice=t)},ze.moneyDec),null,16,["modelValue"])]),(0,n._)("div",Rt,[Lt,(0,n.Wm)(De,(0,n.dG)({name:"investmentAmount",modelValue:ze.renovation.investmentAmount,"onUpdate:modelValue":e[30]||(e[30]=t=>ze.renovation.investmentAmount=t)},ze.money),null,16,["modelValue"])]),(0,n._)("div",Bt,[zt,(0,n.Wm)(De,(0,n.dG)({name:"loanAmount",modelValue:ze.renovation.loanAmount,"onUpdate:modelValue":e[31]||(e[31]=t=>ze.renovation.loanAmount=t)},ze.money),null,16,["modelValue"])]),Wt],512),[[i.F8,Ge.isSolorka]])])]),(0,n._)("div",Zt,[(0,n._)("div",Gt,[(0,n._)("div",Mt,[(0,n._)("div",Dt,[(0,n._)("div",null,[Jt,(0,n._)("div",Nt,[(0,n._)("span",$t,(0,l.zw)(Ge.savingPrYearFormatted)+",-",1)])])]),(0,n._)("div",Qt,[(0,n.wy)((0,n._)("div",qt,[Xt,(0,n._)("div",te,[ee,(0,n._)("div",re,(0,l.zw)(Ge.totalOilPricePrYearFormatted)+" kr.",1)]),(0,n._)("div",ie,[(0,n._)("div",ae,"Árlig útreiðsla við "+(0,l.zw)(Ge.renovationTypeBending),1),(0,n._)("div",ne,(0,l.zw)(Ge.totalElectricityPricePrYearFormatted)+" kr.",1)]),(0,n._)("div",le,[oe,(0,n._)("div",se,(0,l.zw)(Ge.savingPrMonthFormatted)+" kr.",1)]),(0,n._)("div",de,[ue,(0,n._)("div",me,(0,l.zw)(this.formatPrice(Ge.repaymentYears,1))+" ár",1)])],512),[[i.F8,Ge.isJardhiti||Ge.isHitapumpa]]),(0,n.wy)((0,n._)("div",ce,[(0,n._)("div",he,[ge,(0,n._)("div",ve,(0,l.zw)(Ge.savingPrYearFormatted)+" kr.",1)]),(0,n._)("div",ye,[pe,(0,n._)("div",Pe,(0,l.zw)(Ge.repaymentYears)+" ár",1)])],512),[[i.F8,Ge.isBjalving]]),(0,n.wy)((0,n._)("div",be,[(0,n._)("div",fe,[we,(0,n._)("div",Ye,(0,l.zw)(Ge.savingPrMonthFormatted)+" kr.",1)]),(0,n._)("div",Ae,[_e,(0,n._)("div",xe,(0,l.zw)(Ge.repaymentYears)+" ár",1)])],512),[[i.F8,Ge.isSolorka]]),(0,n.wy)((0,n._)("div",ke,[(0,n._)("div",Oe,[Ve,(0,n._)("div",Ue,(0,l.zw)(Ge.totalElectricityPricePrYearFormatted)+" kr.",1)]),(0,n._)("div",Te,[Ke,(0,n._)("div",Ee,(0,l.zw)(Ge.totalElectricityPriceAfterInvestmentPrYearFormatted)+" kr.",1)]),(0,n._)("div",Se,[Fe,(0,n._)("div",Ie,(0,l.zw)(Ge.savingPrYearFormatted)+" kr.",1)]),(0,n._)("div",Ce,[He,(0,n._)("div",je,(0,l.zw)(Ge.repaymentYears)+" ár",1)])],512),[[i.F8,Ge.isHusarhaldstol]])]),Re,(0,n._)("a",{href:Ge.lanLink,target:"_blank",class:"btn btn-default btn-primary",style:{"margin-top":"-17px"}},"Rokna títt orkulán",8,Le),(0,n.wy)((0,n._)("div",Be,We,512),[[i.F8,Ge.isJardhiti||Ge.isHitapumpa]]),(0,n.wy)((0,n._)("div",Ze,Je,512),[[i.F8,Ge.isBjalving]]),(0,n.wy)((0,n._)("div",Ne,Qe,512),[[i.F8,Ge.isSolorka]]),(0,n.wy)((0,n._)("div",qe,tr,512),[[i.F8,Ge.isHusarhaldstol]])])])]),(0,n._)("div",er,[(0,n._)("div",rr,[(0,n._)("small",ir,[ar,(0,n.Uk)(" Útrokningin er vegleiðindi og grundað á ein oljuprís á "+(0,l.zw)(this.formatPrice(ze.renovation.oilPricePrLiter))+" krónur/litur, einum elprísi á "+(0,l.zw)(this.formatPrice(ze.renovation.pricePrKwh))+" krónur/kWh og einum COP á "+(0,l.zw)(Ge.heatingTypeKwhFormatted)+". ",1),nr,(0,n.Uk)(" COP er sambandið millum hitan, sum "+(0,l.zw)(Ge.renovationTypeBending2)+" framleiðir, og mongdina av streymi hon brúkar. ",1),lr,(0,n.Uk)(" Við "+(0,l.zw)(Ge.renovationTypeBending)+" og "+(0,l.zw)(Ge.heatingTypeBending)+" verður væntandi árliga elnýtslan "+(0,l.zw)(ze.renovation.electricityKwhUsagePrYearFormatted())+" kWh um árið.",1)])])])])}var sr=r(2482),dr=r(9661),ur=r(2682);const mr=new Intl.NumberFormat("fo-FO",{});class cr{constructor(t,e){(0,sr.Z)(this,"OilBoilerOptions",[{value:.7,text:"Eldri enn 1980"},{value:.8,text:"1980-1989"},{value:.85,text:"1990-1999"},{value:.9,text:"2000 og fram"}]),(0,sr.Z)(this,"RenovationTypes",["Jarðhita","Hitapumpu (luft til vatn)"]),(0,sr.Z)(this,"HeatingTypes",["Radiator","Gólvhita"]),(0,sr.Z)(this,"HeatingSystems",["Oljufýr","Jarðhita/Hitapumpu"]),(0,sr.Z)(this,"RenovationType",""),(0,sr.Z)(this,"HeatingType",""),(0,sr.Z)(this,"HeatingSystem",""),(0,sr.Z)(this,"minOilAmountPrYear",1e3),(0,sr.Z)(this,"maxOilAmountPrYear",8e3),(0,sr.Z)(this,"oilAmountPrYear",3e3),(0,sr.Z)(this,"oilPricePrLiter",12.75),(0,sr.Z)(this,"electricityKwhUsagePrYear",0),(0,sr.Z)(this,"pricePrKwh",1.45),(0,sr.Z)(this,"minLoanAmount",0),(0,sr.Z)(this,"maxLoanAmount",4e5),(0,sr.Z)(this,"loanAmount",0),(0,sr.Z)(this,"minInvestmentAmount",0),(0,sr.Z)(this,"maxInvestmentAmount",4e5),(0,sr.Z)(this,"investmentAmount",0),(0,sr.Z)(this,"loanInterestRate",1.14),(0,sr.Z)(this,"rentustudul",void 0),(0,sr.Z)(this,"config",{jardhitaCOP:{radiator:4.39,floor:5.8},hitapumpaCOP:{radiator:3.19,floor:4.39},minOilAmountPrYear:1e3,maxOilAmountPrYear:8e3,oilAmountPrYear:3e3,oilPricePrLiter:12.75,electricityKwhUsagePrYear:0,pricePrKwh:1.45,minLoanAmount:0,maxLoanAmount:4e5,loanAmount:0,minInvestmentAmount:0,maxInvestmentAmount:4e5,investmentAmount:0,loanInterestRate:1.14,rentustudul:.35}),(0,sr.Z)(this,"OilBoilerIndex",1),(0,sr.Z)(this,"OilBoilerConstant",this.OilBoilerOptions[this.OilBoilerIndex].value),(0,sr.Z)(this,"OilBoilerText",this.OilBoilerOptions[this.OilBoilerIndex].text),this.RenovationType=t,this.HeatingType=e}init(t){this.config=t,this.minOilAmountPrYear=this.config.minOilAmountPrYear,this.maxOilAmountPrYear=this.config.maxOilAmountPrYear,this.oilAmountPrYear=this.config.oilAmountPrYear,this.oilPricePrLiter=this.config.oilPricePrLiter,this.electricityKwhUsagePrYear=this.config.electricityKwhUsagePrYear,this.pricePrKwh=this.config.pricePrKwh,this.minLoanAmount=this.config.minLoanAmount,this.maxLoanAmount=this.config.maxLoanAmount,this.loanAmount=this.config.loanAmount,this.minInvestmentAmount=this.config.minInvestmentAmount,this.maxInvestmentAmount=this.config.maxInvestmentAmount,this.investmentAmount=this.config.investmentAmount,this.loanInterestRate=this.config.loanInterestRate,this.rentustudul=t.rentustudul,this.checkRenovationType(0)&&(this.RadiatorHeatingCOPConstant=this.config.jardhitaCOP.radiator,this.FloorHeatingCOPConstant=this.config.jardhitaCOP.floor),this.checkRenovationType(1)&&(this.RadiatorHeatingCOPConstant=this.config.hitapumpaCOP.radiator,this.FloorHeatingCOPConstant=this.config.hitapumpaCOP.floor)}lanLink(){return"https://www.betri.fo/banki/laan/bustadarlan?loanValue="+this.investmentAmount+"&termValue="+Math.round(this.repaymentYears())+"#Roknarin"}toString(){var t="Slag av umvæling: ".padEnd(50)+this.RenovationType;return this.RenovationType!=this.RenovationTypes[0]&&this.RenovationType!=this.RenovationTypes[1]||(t+="\nSlag av hita: ".padEnd(50)+this.HeatingType),t+="\n----------------------------------------"+"\nOljunýtsla (litrar) um árið: ".padEnd(50)+this.oilAmountPrYear+"\nOljuprísur per litur: ".padEnd(50)+this.oilPricePrLiter+"\nEl nýtsla (kWh) um árið: ".padEnd(50)+this.electricityKwhUsagePrYear+"\nPrísur per kWh: ".padEnd(50)+this.pricePrKwh+"\nStødd á íløgu: ".padEnd(50)+this.loanAmount+"\nRentan á láninum: ".padEnd(50)+this.loanInterestRate+"\n----------------------------------------"+"\nÁrlig útreiðsla við oljufýri: ".padEnd(50)+this.totalOilPricePrYearFormatted()+"\nÁrlig útreiðsla við "+this.RenovationType.toLowerCase()+": ".padEnd(50)+this.totalElectricityPricePrYearFormatted()+"\nSparing um árið: ".padEnd(50)+this.savingPrYearFormatted()+"\nAfturgjaldstíð: ".padEnd(50)+this.repaymentYears()+"\nSparing um mðr: ".padEnd(50)+this.savingPrMonthFormatted(),t}changeBoiler(){this.OilBoilerConstant=this.OilBoilerOptions[this.OilBoilerIndex].value,this.OilBoilerText=this.OilBoilerOptions[this.OilBoilerIndex].text}formatPrice(t,e=2){let r=(t/1).toFixed(e).replace(".",",");return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}electricityKwhUsagePrYearFormatted(){return this.formatPrice(this.electricityKwhUsagePrYear,0)}realLoanInterestRate(){let t=(this.loanInterestRate-this.loanInterestRate*this.rentustudul).toFixed(2);return t}nperYears(){let t=(this.investmentAmount,this.investmentAmount),e=this.realLoanInterestRate()/100/12,r=(0,ur.OQo)(e,-this.savingPrMonth(),t)/12,i=r.toFixed(1);return i>100||"NaN"==i?"> 100":i}repaymentYears(){var t=(this.investmentAmount/this.savingPrYear()).toFixed(1);return t}savingPrMonth(){return this.savingPrYear()/12}savingPrMonthFormatted(){return this.formatPrice(this.savingPrMonth(),0)}savingPrYear(){return this.totalOilPricePrYear()-this.totalElectricityPricePrYear()}savingPrYearFormatted(){return this.formatPrice(this.savingPrYear(),0)}totalOilPricePrYearFormatted(){return this.formatPrice(this.totalOilPricePrYear(),0)}totalElectricityPricePrYearFormatted(){return this.formatPrice(this.totalElectricityPricePrYear(),0)}totalOilPricePrYear(){let t=this.oilAmountPrYear*this.oilPricePrLiter;return t}totalElectricityPricePrYear(){return this.electricityKwhUsagePrYear*this.pricePrKwh}isOilHeatingSystem(){return!1}totalElectricityPriceAfterInvestmentPrYear(){return 0}totalElectricityPriceAfterInvestmentPrYearFormatted(){return 0}electricityKwhSoldPrYear(){return 0}calculateElectricityUsagePrYear(){this.electricityKwhUsagePrYear=Math.round(10*this.oilAmountPrYear*this.OilBoilerConstant/this.heatingTypeKwh())}checkRenovationType(t){return this.RenovationType==this.RenovationTypes[t]}heatingTypeKwh(){return"Radiator"==this.HeatingType?this.RadiatorHeatingCOPConstant:this.FloorHeatingCOPConstant}heatingTypeKwhFormatted(){return this.formatPrice(this.heatingTypeKwh(),2)}heatingType(){return this.HeatingType}}class hr extends cr{constructor(){super("Jarðhita","Radiator"),this.oilAmountPrYear=3e3,this.OilBoilerConstant=.8,this.loanAmount=19e4,this.investmentAmount=2e5,this.loanInterestRate=2.15}lanLink(){return"https://www.betri.fo/banki/laan/bustadarlan/byggja-ella-umvaela?loanValue="+this.investmentAmount+"&termValue="+Math.round(this.repaymentYears())+"#Roknarin"}toString(){let t=super.toString();return t}}class gr extends cr{constructor(){super("Hitapumpu (luft til vatn)","Radiator"),this.oilAmountPrYear=3e3,this.OilBoilerConstant=.8,this.loanAmount=9e4,this.investmentAmount=1e5,this.loanInterestRate=2.15}lanLink(){return"https://www.betri.fo/banki/laan/bustadarlan/byggja-ella-umvaela?loanValue="+this.investmentAmount+"&termValue="+Math.round(this.repaymentYears())+"#Roknarin"}toString(){let t=super.toString();return t}}class vr extends cr{constructor(){super("Bjálving",""),(0,sr.Z)(this,"oilAmountAfterInvestmentPrYear",900),this.HeatingSystem=this.HeatingSystems[0],this.oilAmountPrYear=3e3,this.oilAmountAfterInvestmentPrYear=2e3,this.oilPricePrLiter=12.75,this.loanAmount=2e4,this.investmentAmount=3e4,this.loanInterestRate=2.15}toString(){var t="Slag av umvæling: ".padEnd(50)+this.RenovationType;return this.isOilHeatingSystem()?t+="\nÁrlig oljunýtsla áðrenn bjálving: ".padEnd(50)+this.oilAmountPrYear+"\nVæntandi oljunýtsla eftir bjálving: ".padEnd(50)+this.oilAmountAfterInvestmentPrYear+"\nVerandi oljuprísur per litur: ".padEnd(50)+this.oilPricePrLiter:t+="\nÁrlig elnýtsla áðrenn bjálving: ".padEnd(50)+this.oilAmountPrYear+"\nVæntandi elnýtsla eftir bjálving: ".padEnd(50)+this.oilAmountAfterInvestmentPrYear+"\nVerandi elprísur per kWh: ".padEnd(50)+this.oilPricePrLiter,t+="\nHvussu stór er íløgan? ".padEnd(50)+this.loanAmount+"\nHvat er rentan á láninum? ".padEnd(50)+this.loanInterestRate+"\n----------------------------------------"+"\nSparing um árið: ".padEnd(50)+this.savingPrYearFormatted()+"\nAfturgjaldstíð: ".padEnd(50)+this.repaymentYears()+"\nSparing um mðr: ".padEnd(50)+this.savingPrMonthFormatted(),t}savingPrYear(){return(this.oilAmountPrYear-this.oilAmountAfterInvestmentPrYear)*this.oilPricePrLiter}isOilHeatingSystem(){return this.HeatingSystem==this.HeatingSystems[0]}changeHeatingSystemValues(){this.isOilHeatingSystem()?(this.oilAmountPrYear=3e3,this.oilAmountAfterInvestmentPrYear=2e3,this.oilPricePrLiter=8.22,this.loanAmount=2e4,this.investmentAmount=3e4):(this.oilAmountPrYear=5e3,this.oilAmountAfterInvestmentPrYear=4e3,this.oilPricePrLiter=1.45,this.loanAmount=9e4,this.investmentAmount=1e5)}}class yr extends cr{constructor(){super("Húsarhaldstól",""),(0,sr.Z)(this,"electricityAfterInvestmentKwhUsagePrYear",300),this.electricityKwhUsagePrYear=2e3,this.pricePrKwh=1.95,this.loanAmount=2e3,this.investmentAmount=3e3,this.loanInterestRate=3.25,this.rentustudul=0}toString(){var t="Slag av umvæling: ".padEnd(50)+this.RenovationType+"\nÁrlig elnýtsla við verandi tóli: ".padEnd(50)+this.electricityKwhUsagePrYearFormatted()+"\nVerandi prísur per kWh: ".padEnd(50)+this.pricePrKwh+"\nVæntandi árlig elnýtsla við nýggjum tóli: ".padEnd(50)+this.electricityAfterInvestmentKwhUsagePrYear+"\nHvussu stór er íløgan? ".padEnd(50)+this.loanAmount+"\nHvat er rentan á láninum? : ".padEnd(50)+this.loanInterestRate+"\n----------------------------------------"+"\nÁrlig útreiðsla við verandi tóli: ".padEnd(50)+this.totalElectricityPricePrYearFormatted()+"\nÁrlig útreiðsla við nýggjum tóli: ".padEnd(50)+this.totalElectricityPriceAfterInvestmentPrYearFormatted()+"\nSparing um árið: ".padEnd(50)+this.savingPrYearFormatted()+"\nAfturgjaldstíð: ".padEnd(50)+this.repaymentYears()+"\nSparing um mðr: ".padEnd(50)+this.savingPrMonthFormatted();return t}calculateElectricityUsagePrYear(){}savingPrYear(){return this.totalElectricityPricePrYear()-this.totalElectricityPriceAfterInvestmentPrYear()}totalElectricityPriceAfterInvestmentPrYear(){return this.electricityAfterInvestmentKwhUsagePrYear*this.pricePrKwh}totalElectricityPriceAfterInvestmentPrYearFormatted(){return this.formatPrice(this.totalElectricityPriceAfterInvestmentPrYear(),0)}}class pr extends cr{constructor(){super("Sólorku",""),(0,sr.Z)(this,"electricityKwhProductionPrYear",void 0),(0,sr.Z)(this,"electricityKwhOwnUsagePrYear",void 0),(0,sr.Z)(this,"electricityUsageCost",void 0),(0,sr.Z)(this,"electricitySellingPrice",void 0),this.electricityKwhProductionPrYear=7e3,this.electricityKwhOwnUsagePrYear=2e3,this.electricityUsageCost=1.95,this.electricitySellingPrice=.93,this.loanAmount=1e5,this.investmentAmount=125e3,this.loanInterestRate=2.15}lanLink(){return"https://www.betri.fo/banki/laan/bustadarlan/byggja-ella-umvaela?loanValue="+this.investmentAmount+"&termValue="+Math.round(this.repaymentYears())+"#Roknarin"}toString(){var t="Slag av umvæling: ".padEnd(50)+this.RenovationType+"\nHvussu stór er íløgan?: ".padEnd(50)+this.loanAmount+"\nÁrlig framleiðsla: ".padEnd(50)+this.electricityKwhProductionPrYear+"\nEginnýtsla: ".padEnd(50)+this.electricityKwhOwnUsagePrYear+"\nKostnaður fyri eginnýtslu: ".padEnd(50)+this.electricityUsageCost+"\nSøla til SEV: ".padEnd(50)+this.electricityKwhSoldPrYear()+"\nPrísur fyri sølu per kWh: ".padEnd(50)+this.electricitySellingPrice+"\n----------------------------------------"+"\nAvkast um mánaðin: ".padEnd(50)+this.savingPrMonthFormatted()+"\nAfturgjaldstíð: ".padEnd(50)+this.repaymentYears()+"\nSparing um mðr: ".padEnd(50)+this.savingPrMonthFormatted();return t}electricityKwhSoldPrYear(){return this.electricityKwhProductionPrYear-this.electricityKwhOwnUsagePrYear}productionTotalPrYear(){return this.ownUsageTotalPrYear()+this.soldTotalPrYear()}ownUsageTotalPrYear(){return this.electricityKwhOwnUsagePrYear*this.electricityUsageCost}soldTotalPrYear(){var t=this.electricityKwhProductionPrYear-this.electricityKwhOwnUsagePrYear;return t*this.electricitySellingPrice}electricityProductionPrice(){var t=this.productionTotalPrYear()/this.electricityKwhProductionPrYear;return t}savingPrYear(){return this.productionTotalPrYear()}}var Pr={name:"App",components:{slider:dr.Z},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:" kr. ",precision:0,masked:!1},moneyDec:{decimal:",",thousands:".",prefix:"",suffix:" kr. ",precision:2,masked:!1},kwh:{decimal:",",thousands:".",prefix:"",suffix:" kWh ",precision:0,masked:!1},liter:{decimal:",",thousands:".",prefix:"",suffix:" litrar ",precision:0,masked:!1},pct:{decimal:",",thousands:".",prefix:"",suffix:" % ",precision:2,masked:!1},renovation:new hr,sliderValue:20,sliderCurrencyFormat:function(t){return mr.format(t).replace(",",".")+" kr."},sliderLiterFormat:function(t){return mr.format(t).replace(",",".")+" litrar"}}},computed:{heatingTypeBending(){var t=this.renovation.HeatingType.toLowerCase();switch(t){case"radiator":t="radiatori";break;case"gólvhita":t="gólvhita";break}return t},renovationTypeBending(){var t=this.renovation.RenovationType.toLowerCase();switch(t){case"hitapumpa":t="hitapumpu";break;case"jarðhita":t="jarðhita";break}return t},renovationTypeBending2(){var t=this.renovation.RenovationType.toLowerCase();switch(t){case"hitapumpu":t="hitapumpan";break;case"jarðhita":t="jarðhitaskipanin";break}return t},heatingTypeKwhFormatted(){return this.renovation.heatingTypeKwhFormatted()},oilBoilerOptions(){return this.renovation.OilBoilerOptions},renovationTypes(){return this.renovation.RenovationTypes},heatingTypes(){return this.renovation.HeatingTypes},heatingSystems(){return this.renovation.HeatingSystems},renovationType(){return this.renovation.RenovationType},nperYears(){return this.renovation.nperYears()},repaymentYears(){return this.renovation.repaymentYears()},totalOilPricePrYearFormatted(){return this.renovation.totalOilPricePrYearFormatted()},totalElectricityPricePrYearFormatted(){return this.renovation.totalElectricityPricePrYearFormatted()},totalElectricityPriceAfterInvestmentPrYearFormatted(){return this.renovation.totalElectricityPriceAfterInvestmentPrYearFormatted()},electricityKwhSoldPrYear(){return this.renovation.electricityKwhSoldPrYear()},savingPrYearFormatted(){return this.renovation.savingPrYearFormatted()},savingPrMonthFormatted(){return this.renovation.savingPrMonthFormatted()},isJardhiti(){return this.renovation.checkRenovationType(0)},isHitapumpa(){return this.renovation.checkRenovationType(1)},isSolorka(){return this.renovation.checkRenovationType(2)},isBjalving(){return this.renovation.checkRenovationType(3)},isHusarhaldstol(){return this.renovation.checkRenovationType(4)},isOilHeatingSystem(){return this.renovation.isOilHeatingSystem()},lanLink(){return this.renovation.lanLink()}},mounted(){this.renovation.init(this.$burdardygdConfig),this.renovation.calculateElectricityUsagePrYear();var t=document.getElementsByClassName("form-module-a");t.length>0&&(t[0].style.visibility="hidden")},methods:{formatPrice(t,e=2){let r=(t/1).toFixed(e).replace(".",",");return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},onRenovationTypeChanged(){this.isJardhiti?this.renovation=new hr:this.isHitapumpa?this.renovation=new gr:this.isSolorka?this.renovation=new pr:this.isBjalving?this.renovation=new vr:this.isHusarhaldstol&&(this.renovation=new yr),this.renovation.init(this.$burdardygdConfig),this.renovation.calculateElectricityUsagePrYear()},onHeatingTypeChanged(){this.renovation.changeBoiler(),this.renovation.calculateElectricityUsagePrYear()},onHeatingSystemChanged(){this.renovation.changeHeatingSystemValues(),this.renovation.calculateElectricityUsagePrYear()}}},br=r(89);const fr=(0,br.Z)(Pr,[["render",or]]);var wr=fr;window.burdardygdConfig||(window.burdardygdConfig={jardhitaCOP:{radiator:4.39,floor:5.8},hitapumpaCOP:{radiator:3.19,floor:4.39},minOilAmountPrYear:1e3,maxOilAmountPrYear:8e3,oilAmountPrYear:3e3,oilPricePrLiter:12.75,electricityKwhUsagePrYear:0,pricePrKwh:1.45,minLoanAmount:0,maxLoanAmount:4e5,loanAmount:0,minInvestmentAmount:0,maxInvestmentAmount:4e5,investmentAmount:2e5,loanInterestRate:1.14,rentustudul:.35});const Yr=(0,i.ri)(wr);Yr.config.globalProperties.$burdardygdConfig=window.burdardygdConfig,Yr.use(a.ZP),Yr.mount("#burdarddygd-app")}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,a,n){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,s=0;s<i.length;s++)(!1&n||l>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[s])}))?i.splice(s--,1):(o=!1,n<l&&(l=n));if(o){t.splice(u--,1);var d=a();void 0!==d&&(e=d)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,l=i[0],o=i[1],s=i[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(s)var u=s(r)}for(e&&e(i);d<l.length;d++)n=l[d],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},i=self["webpackChunkburdarddygdwebapp"]=self["webpackChunkburdarddygdwebapp"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(8541)}));i=r.O(i)})();
//# sourceMappingURL=app.ca6b6e04.js.map