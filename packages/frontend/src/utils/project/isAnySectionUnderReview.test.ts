import {
  Layer2,
  Layer2Config,
  Layer2Display,
  ScalingProjectContracts,
  ScalingProjectRiskView,
  ScalingProjectRiskViewEntry,
  ScalingProjectTechnology,
  StageConfig,
} from '@l2beat/config'
import { ProjectId } from '@l2beat/shared-pure'
import { expect, mockObject } from 'earl'

import { isAnySectionUnderReview } from './isAnySectionUnderReview'

describe(isAnySectionUnderReview.name, () => {
  const mockProject: Layer2 = {
    type: 'layer2',
    id: ProjectId('project-id'),
    display: mockObject<Layer2Display>(),
    technology: mockObject<ScalingProjectTechnology>({
      isUnderReview: undefined,
    }),
    contracts: mockObject<ScalingProjectContracts>({
      isUnderReview: undefined,
    }),
    riskView: mockObject<ScalingProjectRiskView>(),
    config: mockObject<Layer2Config>(),
    stage: mockObject<StageConfig>({ stage: 'Stage 1' }),
  }
  it('returns false', () => {
    expect(isAnySectionUnderReview(mockProject)).toEqual(false)
  })

  describe('returns true if', () => {
    it('project.isUnderReview is true', () => {
      const mock = {
        ...mockProject,
        isUnderReview: true,
      }
      expect(isAnySectionUnderReview(mock)).toEqual(true)
    })

    it('project.technology.isUnderReview is true', () => {
      const mock = {
        ...mockProject,
        technology: {
          ...mockProject.technology,
          isUnderReview: true,
        },
      }
      expect(isAnySectionUnderReview(mock)).toEqual(true)
    })

    it('project.contracts.isUnderReview is true', () => {
      const mock = {
        ...mockProject,
        contracts: {
          ...mockProject.contracts,
          isUnderReview: true,
        },
      }
      expect(isAnySectionUnderReview(mock)).toEqual(true)
    })

    it('project.riskView has a underReview risk', () => {
      const mock = {
        ...mockProject,
        riskView: {
          ...mockProject.riskView,
          sequencerFailure: {
            ...mockObject<ScalingProjectRiskViewEntry>(),
            sentiment: 'UnderReview' as const,
          },
        },
      }
      expect(isAnySectionUnderReview(mock)).toEqual(true)
    })

    it('project.type is layer2 and project.stage.stage is UnderReview', () => {
      const mock = {
        ...mockProject,
        stage: {
          stage: 'UnderReview' as const,
        },
      }
      expect(isAnySectionUnderReview(mock)).toEqual(true)
    })
  })
})
