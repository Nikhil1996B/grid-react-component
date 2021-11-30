import React, { FunctionComponent } from 'react'
import styles from './GridRuler.module.scss'
import cn from 'classnames'

type Spacing = 'sm' | 'md' | 'lg'

const GridRuler: FunctionComponent<{ spacing?: Spacing }> = ({ spacing }) => {
  const classNames = cn(styles.GridRuler, {
    [styles[`GridRuler_spacing_${spacing}`]]: spacing,
  })
  return (
    <div className={classNames}>
      {Array.from(Array(12).keys()).map((n) => (
        <div className={styles.GridRuler_item} key={n} />
      ))}
    </div>
  )
}

export default GridRuler
